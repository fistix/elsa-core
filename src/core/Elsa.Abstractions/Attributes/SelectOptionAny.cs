using Elsa.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Elsa.Attributes
{
    public class SelectOptionAny : ActivityPropertyOptionsAttribute
    {
        public SelectOptionAny()
        {
        }

        public SelectOptionAny(string api)
        {
            Api = api;
            Items = new string[] { api };
        }

        public SelectOptionAny(string sourceApi, string detailsApi)
        {
            Items = new SelectMessaging[] { new SelectMessaging { SourceApi = sourceApi, DetailsApi = detailsApi } };
        }

        public SelectOptionAny(string[] options)
        {
            Items = options;
        }

        public object[] Items { get; }
        public string Api { get; set; }

        public override object GetOptions()
        {
            if (Items != null)
                return new
                {
                    Items
                };

            return new object();
            //return Api;
        }
    }
}
