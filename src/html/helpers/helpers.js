module.exports = {
	startsWith: function (a, b, opts) {
		if (a.startsWith("*")) return opts.fn(this);
		else return opts.inverse(this);
	},
	greaterThan: function (a, b, opts) {
		if (a > b) return opts.fn(this);
		else return opts.inverse(this);
	},
	ifEquals: function (a, b, opts) {
		if (a === b) return opts.fn(this);
		else return opts.inverse(this);
	},
	lessThan: function (a, b, opts) {
		if (a < b) return opts.fn(this);
		else return opts.inverse(this);
	},
	slugify: function (text) {
		return String(text)
			.replace(/\s+/g, '-')
			.toLowerCase();
	}
};
