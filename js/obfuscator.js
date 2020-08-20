var obfuscator = (function() {
    var rot13decode = function(a) {
        return a.replace(/[a-zA-Z]/g, function(c) {
            return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
        });
    };

    var obfuscate = function(str) {
        return rot13decode(str);
    };

    return {
        obfuscate : obfuscate
    };
})();