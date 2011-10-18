Ext.define('Pecunia.CurrenciesPanel.remoting.Proxy', {
	extend: 'Dextop.Window.remoting.Proxy'
});

Ext.define('Pecunia.GdpPanel.remoting.Proxy', {
	extend: 'Dextop.Window.remoting.Proxy'
});

Ext.define('Pecunia.UsersPanel.remoting.Proxy', {
	extend: 'Dextop.Window.remoting.Proxy'
});

Ext.define('Pecunia.RichPeoplePanel.remoting.Proxy', {
	extend: 'Dextop.Window.remoting.Proxy'
});

Ext.define('Pecunia.Session.remoting.Proxy', {
	extend: 'Dextop.Session.remoting.Proxy',
	CreatePanel: function(panelName, callback, scope) { this.invokeRemoteMethod(callback, scope, 'CreatePanel', [panelName]);}
});

Ext.define('Pecunia.StocksPanel.remoting.Proxy', {
	extend: 'Dextop.Window.remoting.Proxy'
});

