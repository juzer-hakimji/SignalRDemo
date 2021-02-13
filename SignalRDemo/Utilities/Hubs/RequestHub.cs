using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRDemo.Utilities.Hubs
{
    public class BroadcastHub : Hub
    {
        public async Task SendMessage(MessageModel message)
        {
            //This method broadcasts the request received from client to all the connected users
            await Clients.Others.SendAsync("NewMessage", message);
        }
    }
}
