-- Taken from the Wiki for isBan






function banRecieve ( ban )
    if ban and isBan(ban) == true then
        outputChatBox("this is a ban!")--Valid ban is recieved!
    else
        outputChatBox("this is not a ban, this is a "..getElementType(ban))--if the argument is not a ban, then checks its type and output it into the chat box.
    end
end