using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRDemo.Utilities.Hubs
{
    public class MessageModel
    {
        public int userId { get; set; }
        public string message { get; set; }
    }
}
