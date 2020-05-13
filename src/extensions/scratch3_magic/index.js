const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
// const {exec} = require('child_process');
// const RenderedTarget = require('../../sprites/rendered-target');
const log = require('../../util/log');
// const nets = require('nets');

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHN0eWxlPi5zdDJ7ZmlsbDpyZWR9LnN0M3tmaWxsOiNlMGUwZTB9LnN0NHtmaWxsOm5vbmU7c3Ryb2tlOiM2NjY7c3Ryb2tlLXdpZHRoOi41O3N0cm9rZS1taXRlcmxpbWl0OjEwfTwvc3R5bGU+PHBhdGggZD0iTTM1IDI4SDVhMSAxIDAgMCAxLTEtMVYxMmMwLS42LjQtMSAxLTFoMzBjLjUgMCAxIC40IDEgMXYxNWMwIC41LS41IDEtMSAxeiIgZmlsbD0iI2ZmZiIgaWQ9IkxheWVyXzYiLz48ZyBpZD0iTGF5ZXJfNCI+PHBhdGggY2xhc3M9InN0MiIgZD0iTTQgMjVoMzJ2Mi43SDR6TTEzIDI0aC0yLjJhMSAxIDAgMCAxLTEtMXYtOS43YzAtLjYuNC0xIDEtMUgxM2MuNiAwIDEgLjQgMSAxVjIzYzAgLjYtLjUgMS0xIDF6Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTYuMSAxOS4zdi0yLjJjMC0uNS40LTEgMS0xaDkuN2MuNSAwIDEgLjUgMSAxdjIuMmMwIC41LS41IDEtMSAxSDcuMWExIDEgMCAwIDEtMS0xeiIvPjxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjIyLjgiIGN5PSIxOC4yIiByPSIzLjQiLz48Y2lyY2xlIGNsYXNzPSJzdDIiIGN4PSIzMC42IiBjeT0iMTguMiIgcj0iMy40Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTQuMiAyN2gzMS45di43SDQuMnoiLz48L2c+PGcgaWQ9IkxheWVyXzUiPjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjIyLjgiIGN5PSIxOC4yIiByPSIyLjMiLz48Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIzMC42IiBjeT0iMTguMiIgcj0iMi4zIi8+PHBhdGggY2xhc3M9InN0MyIgZD0iTTEyLjUgMjIuOWgtMS4yYy0uMyAwLS41LS4yLS41LS41VjE0YzAtLjMuMi0uNS41LS41aDEuMmMuMyAwIC41LjIuNS41djguNGMwIC4zLS4yLjUtLjUuNXoiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNNy4yIDE4Ljd2LTEuMmMwLS4zLjItLjUuNS0uNWg4LjRjLjMgMCAuNS4yLjUuNXYxLjJjMCAuMy0uMi41LS41LjVINy43Yy0uMyAwLS41LS4yLS41LS41ek00IDI2aDMydjJINHoiLz48L2c+PGcgaWQ9IkxheWVyXzMiPjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0zNS4yIDI3LjlINC44YTEgMSAwIDAgMS0xLTFWMTIuMWMwLS42LjUtMSAxLTFoMzAuNWMuNSAwIDEgLjQgMSAxVjI3YTEgMSAwIDAgMS0xLjEuOXoiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMzUuMiAyNy45SDQuOGExIDEgMCAwIDEtMS0xVjEyLjFjMC0uNi41LTEgMS0xaDMwLjVjLjUgMCAxIC40IDEgMVYyN2ExIDEgMCAwIDEtMS4xLjl6Ii8+PC9nPjwvc3ZnPg==';

/**
 * Class for the magic block in Scratch 3.0.
 * @constructor
 */
class Scratch3MagicBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {string}
         * @private
         */
        this._runtiem = runtime;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: 'magicblocks',
            name: '隐藏扩展测试',
            blockIconURI: blockIconURI,
            blocks: [{
                opcode: 'loadSB3',
                blockType: BlockType.COMMAND,
                arguments: {
                    fullpath: {
                        type: ArgumentType.STRING
                    }
                },
                text: '选择应用程序 [程序路径]'
            }, {
                opcode: 'loadURL',
                blockType: BlockType.COMMAND,
                arguments: {
                    url: {
                        type: ArgumentType.STRING
                    }
                },
                text: '输入URL地址 [URL地址]'
            }, {
                opcode: 'magicHideRelatives',
                blockType: BlockType.COMMAND,
                text: '隐藏块测试'
            }]
        };
    }

    loadSB3 (args){
        // exec(args.fullpath);
        log.debug('加载 sb3', args);
    }

    loadURL (args){
        // exec(`start ${args.url}`);
        log.debug('调用程序', args);
    }

    magicHideRelatives (args, util) {
        // const sprite = 'xx';
        // const target = new RenderedTarget(sprite, this.runtime);
        const target = util.target;
        this.runtime.hideBlocks(target);
    }
}
module.exports = Scratch3MagicBlocks;
