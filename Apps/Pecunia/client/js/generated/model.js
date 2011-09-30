Ext.define('Pecunia.model.Rate',
{
	extend: 'Ext.data.Model',
	fields: [{
		name: 'Id',
		type: 'int',
		useNull: true
	}, {
		name: 'Currency',
		type: 'string',
		useNull: true
	}, {
		name: 'ISOCode',
		type: 'string',
		useNull: true
	}, {
		name: 'Value',
		type: 'float',
		useNull: true
	}],
	idProperty: 'Id'
});
Ext.define('Pecunia.model.SampleConvertion',
{
	extend: 'Ext.data.Model',
	fields: [{
		name: 'Id',
		type: 'int',
		useNull: true
	}],
	idProperty: 'Id'
});
Ext.define('Pecunia.UsersPanel.model.User',
{
	extend: 'Ext.data.Model',
	fields: [{
		name: 'Id',
		type: 'int',
		useNull: true
	}, {
		name: 'Active',
		type: 'boolean',
		useNull: true
	}, {
		name: 'Username',
		type: 'string',
		useNull: true
	}, {
		name: 'DisplayName',
		type: 'string',
		useNull: true
	}, {
		name: 'EMail',
		type: 'string',
		useNull: true
	}],
	idProperty: 'Id'
});
