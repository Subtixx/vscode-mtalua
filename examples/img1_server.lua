-- Taken from Ultimate by emre1702, so copyright to him.
addEventHandler("onGabelstablerJobStart", getRootElement(), function()
    if(isElement(stabler[source])) then return end
    if(vioGetElementData(source, "job") == "gabelstabler") then return end
    setCameraMatrix(source, 1093.2479, 1891.6010, 16, 1075.02, 1883.3138, 10.8203)
    outputChatBox("Lade die Kisten auf deinem Gabelstabler. Fuer jede kiste bekommst du $"..lohn..". Du bekommst extra Geld fuer gruene Kisten.", source, 0, 255, 0)
    setElementFrozen(source, true)
    local thePlayer = source
    setTimer(function()
        outputChatBox("Bringe die Kisten dann zu den Flatbed's.", thePlayer, 0, 255, 0)
        setCameraMatrix(thePlayer, 1094.4500, 1896.004, 16.4873, 1112.6311, 1909.3779, 10.8203)
        setTimer(function()
            fadeCamera(thePlayer, false)
            setTimer(function()
                if(isElement(thePlayer)) then
                    setElementFrozen(thePlayer, false)
                    setCameraTarget(thePlayer, thePlayer)
                    fadeCamera(thePlayer, true)
                    vioSetElementData(thePlayer, "job", "gabelstabler")
                    stabler[thePlayer] = createVehicle(getVehicleModelFromName("Forklift"), 1091.6999511719, 1891.3000488281, 10.60000038147, 0, 0, 180, getPlayerName(thePlayer))
                    warpPedIntoVehicle(thePlayer, stabler[thePlayer])
                    setVehicleDamageProof(stabler[thePlayer], true)
                end
            end, 1500, 1)
        end, 2500, 1)
    end, 5000, 1)
end)

