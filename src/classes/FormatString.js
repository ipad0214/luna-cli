Object.defineProperty(String.prototype, "format", {
    value: function format() {
        var s = this,
        i = arguments.length;
    
        while (i--) {
            s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
        }
        return s;
    },
    writable: true,
    configurable: true
});