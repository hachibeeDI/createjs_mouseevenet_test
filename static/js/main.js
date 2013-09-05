(function () { "use strict";
var Main = function() {
	js.Browser.window.onload = $bind(this,this.initHandler);
};
Main.__name__ = true;
Main.main = function() {
	new Main();
}
Main.prototype = {
	tickHandler: function() {
		this.stage.update();
	}
	,initHandler: function(_) {
		createjs.Ticker.useRAF = true;
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addListener($bind(this,this.tickHandler));
		this.stage = new createjs.Stage(js.Browser.document.getElementById("canvas"));
		var shape = new createjs.Shape();
		shape.graphics.beginFill("#FF0000");
		shape.graphics.drawCircle(20,20,20);
		shape.graphics.endFill();
		shape.onClick = function(e) {
			console.log("red: x = " + Std.string(e.stageX) + " y = " + Std.string(e.stageY));
		};
		this.stage.addChild(shape);
		shape.x = shape.y = 50;
		var b_shape = new createjs.Shape();
		b_shape.graphics.beginFill("#000000");
		b_shape.graphics.drawCircle(20,20,20);
		b_shape.graphics.endFill();
		b_shape.onClick = function(e) {
			console.log("black: x = " + Std.string(e.stageX) + " y = " + Std.string(e.stageY));
		};
		this.stage.addChild(b_shape);
		b_shape.x = b_shape.y = 200;
	}
}
var Std = function() { }
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
var js = {}
js.Boot = function() { }
js.Boot.__name__ = true;
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Browser = function() { }
js.Browser.__name__ = true;
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
String.__name__ = true;
Array.__name__ = true;
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
Main.main();
})();

//@ sourceMappingURL=main.js.map