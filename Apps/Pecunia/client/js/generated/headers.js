Ext.define('Pecunia.CoursesPanel.columns.RateModel', {
	extend: 'Dextop.ItemFactory',
	getDictionary: function(){
		var dict = {};
		dict["Currency"] = {
			text: this.CurrencyText,
			width: 200,
			dataIndex: 'Currency',
			type: 'string'
		};
		dict["Rate"] = {
			text: this.RateText,
			width: 100,
			dataIndex: 'Rate',
			type: 'float'
		};
		dict["Amount"] = {
			text: this.AmountText,
			renderer: 'money',
			dataIndex: 'Amount',
			type: 'float'
		};
		dict["ISOCode"] = {
			text: this.ISOCodeText,
			width: 50,
			dataIndex: 'ISOCode',
			type: 'string'
		};
		return dict;

	},
	buildItems: function(dict){
		return [dict['Currency'], dict['Rate'], dict['Amount'], dict['ISOCode']];
	},
	CurrencyText: 'Currency',
	RateText: 'Rate',
	AmountText: 'Amount',
	ISOCodeText: 'ISO'
});
Ext.define('Pecunia.columns.Stock', {
	extend: 'Dextop.ItemFactory',
	getDictionary: function(){
		var dict = {};
		dict["Name"] = {
			text: this.NameText,
			flex: 1,
			width: 200,
			dataIndex: 'Name',
			type: 'string'
		};
		dict["Code"] = {
			text: this.CodeText,
			width: 100,
			dataIndex: 'Code',
			type: 'string'
		};
		dict["Change"] = {
			text: this.ChangeText,
			width: 100,
			dataIndex: 'Change',
			type: 'float'
		};
		dict["Price"] = {
			text: this.PriceText,
			width: 100,
			dataIndex: 'Price',
			type: 'float'
		};
		return dict;

	},
	buildItems: function(dict){
		return [dict['Name'], dict['Code'], dict['Change'], dict['Price']];
	},
	NameText: 'Name',
	CodeText: 'Code',
	ChangeText: 'Code',
	PriceText: 'Price'
});
Ext.define('Pecunia.UsersPanel.columns.User', {
	extend: 'Dextop.ItemFactory',
	getDictionary: function(){
		var dict = {};
		dict["Active"] = {
			text: this.ActiveText,
			width: 50,
			dataIndex: 'Active',
			type: 'boolean'
		};
		dict["Username"] = {
			text: this.UsernameText,
			width: 100,
			dataIndex: 'Username',
			type: 'string'
		};
		dict["DisplayName"] = {
			text: this.DisplayNameText,
			width: 150,
			dataIndex: 'DisplayName',
			type: 'string'
		};
		dict["EMail"] = {
			text: this.EMailText,
			width: 150,
			dataIndex: 'EMail',
			type: 'string'
		};
		return dict;

	},
	buildItems: function(dict){
		return [dict['Active'], dict['Username'], dict['DisplayName'], dict['EMail']];
	},
	ActiveText: 'Active',
	UsernameText: 'Username',
	DisplayNameText: 'Display Name',
	EMailText: 'EMail'
});
