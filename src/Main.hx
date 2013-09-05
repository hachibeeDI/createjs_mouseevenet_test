package;

import js.Browser;

import createjs.easeljs.Shape;
import createjs.easeljs.MouseEvent;
import createjs.easeljs.Stage;
import createjs.easeljs.Ticker;


class Main
{
    private var stage: Stage;

    public static function main(): Void
    {
        new Main();
    }

    public function new()
    {
        Browser.window.onload = initHandler;
    }

    private function initHandler(_): Void
    {
        Ticker.useRAF = true;
        Ticker.setFPS(60);
        Ticker.addListener(tickHandler);

        this.stage = new Stage(cast Browser.document.getElementById("canvas"));

        var shape: Shape = new Shape();
        shape.graphics.beginFill("#FF0000");
        shape.graphics.drawCircle(20, 20, 20);
        shape.graphics.endFill();
        shape.onClick = function(e: MouseEvent) {
            trace('red: x = ${Std.string(e.stageX)} y = ${Std.string(e.stageY)}');
        }
        this.stage.addChild(shape);
        shape.x = shape.y = 50;

        // オブジェクトごとにClickEventを登録出来る。感知もCreatejs側がいい感じにしてくれるっぽい
        var b_shape = new Shape();
        b_shape.graphics.beginFill("#000000");
        b_shape.graphics.drawCircle(20, 20, 20);
        b_shape.graphics.endFill();
        b_shape.onClick = function(e: MouseEvent) {
            trace('black: x = ${Std.string(e.stageX)} y = ${Std.string(e.stageY)}');
        }
        this.stage.addChild(b_shape);
        b_shape.x = b_shape.y = 200;
    }

    private function tickHandler(): Void
    {
        stage.update();
    }
}

