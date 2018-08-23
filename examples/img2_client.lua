-- Taken from Ultimate by emre1702, so copyright to him.
function UI.render() 
    local px, py, pz = getCameraMatrix()
    local players = getElementsByType ( "player", root, true )
    local frak = getElementData ( localPlayer, "fraktion" )
    for i=1, #players do
        local player = players[i]
        if player ~= localPlayer then
            local x, y, z = getPedBonePosition ( player, 8 )
            local dist = math.sqrt ( ( px - x ) ^ 2 + ( py - y ) ^ 2 + ( pz - z ) ^ 2 )
            local targeted = false
            if dist > 30 and target == player then
                dist = 30
                targeted = true
            end
            if dist <= 30 then
                if isLineOfSightClear ( px, py, pz, x, y, z, true, false, false, true, false, false, false, localPlayer ) then 
                    local sx, sy = getScreenFromWorldPosition ( x, y, z + 0.3 + dist * 0.013333 )
                    if sx and sy then
                        local r, g, b = returnRGBFromHealth ( player )
                        local name = getPlayerName ( player )
                        local status = getElementData ( player, "writingState" ) or getElementData(player, "socialState") or "Ultimate-RL"
                        local namesize = 2+ ( 15 - dist ) * 0.02
                        local pfrak = getElementData ( player, "fraktion")
                        local tHeight = dxGetFontHeight(1.5+ ( 15 - dist ) * 0.02,"default-bold")
                        dxDrawText ( name, sx-1, sy, sx-1, sy, tocolor ( 0, 0, 0, 255 ), namesize, "default-bold", "center", "center" )
                        dxDrawText ( name, sx, sy, sx, sy, tocolor ( r, g, b, 255 ), namesize, "default-bold", "center", "center" )
                        if not targeted then 
                            local tHeight = dxGetFontHeight(1.5+ ( 15 - dist ) * 0.02,"default-bold")
                            local statussize = getBestFontSize ( 0.9+ ( 15 - dist ) * 0.02 )
                            dxDrawText ( status, sx, sy +tHeight*0.6, sx, sy+tHeight, tocolor ( 0, 0, 0, 255 ), statussize, "default-bold", "center", "center" )
                            if evilFraction[frak] and ( evilFraction[pfrak] and frak ~= pfrak or goodFraction[pfrak] ) or goodFraction[frak] and evilFraction[pfrak] then
                                dxDrawText ( status, sx - 1, (sy +tHeight*0.6), sx-1, sy+tHeight, tocolor ( 200, 0, 0, 255 ), statussize, "default-bold", "center", "center" )
                            else
                                dxDrawText ( status, sx - 1, (sy +tHeight*0.6), sx-1, sy+tHeight, tocolor ( 0, 200, 0, 255 ), statussize, "default-bold", "center", "center" )
                            end
                        end
                        if pfrak == 0 then
                            if blacklistArray[name] then
                                if evilFraction[frak] then
                                    dxDrawImage ( sx-22, sy-tHeight*1.9, 44, tHeight*1.45, "images/nametag/target.png" )
                                end
                            end
                        end
                        if frak == 1 or frak == 6 or frak == 8 then
                            local wanted = getElementData ( player, "wanteds" )
                            if wanted and wanted > 0 then
                                dxDrawImage ( sx-22, sy-tHeight*1.9, 44, tHeight*1.45, "images/nametag/police.png" )
                                dxDrawText ( wanted, sx, sy-tHeight*1.9, sx, sy-tHeight*0.55, tocolor ( 0, 0, 0, 255 ), 1.3, "default-bold", "center", "center", false, false )
                            end
                        end
                    end
                end					
            end
        end
    end
end