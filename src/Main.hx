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


        var rect = new Shape();
        rect.graphics.beginFill("#FF0000")
            .drawRect(0, 0, 9, 9)
            .endFill();
        rect.onClick = function(e: MouseEvent) {
            rect.scaleX = 3;
            rect.scaleY = 3;
        }
        this.stage.addChild(rect);

        var rect2 = new Shape();
        rect2.graphics.beginFill("#FF0000")
            .drawRect(0, 10, 9, 9)
            .endFill();
        rect2.onClick = function(e: MouseEvent) {
            rect2.scaleX = 3;
            rect2.scaleY = 3;
        }
        this.stage.addChild(rect2);
    }

    private function tickHandler(): Void
    {
        stage.update();
    }
}

