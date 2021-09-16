export namespace fsUtils {
    /**
     * 读取文件
     * @param {String} path 文件路径
     * @param {Object} options 配置项
     * @param {String} options.encoding 编码格式
     * @param {String} options.flag 文件系统支持
     * @returns {Promise<Buffer>} 读取结果
     */
    function readFileAsync(path: string, { encoding, flag }?: {
        encoding: string;
        flag: string;
    }): Promise<Buffer>;
    /**
     * 读取文件
     * @param {String} path 文件路径
     * @param {Object} options 配置项
     * @param {String} options.encoding 编码格式
     * @param {String} options.flag 文件系统支持
     * @returns {Promise<Buffer>} 读取结果
     */
    function readFileAsync(path: string, { encoding, flag }?: {
        encoding: string;
        flag: string;
    }): Promise<Buffer>;
    /**
     * 写入文件
     * @param {String} path 文件路径
     * @param {String} content 写入内容
     * @param {Object} options 配置项
     * @param {String} options.encoding 编码格式
     * @param {Number} options.mode 编码格式
     * @param {String} options.flag 文件系统支持
     * @returns {Promise<void>} 读取结果
     */
    function writeFileAsync(path: string, content: string, { encoding, flag, mode }?: {
        encoding: string;
        mode: number;
        flag: string;
    }): Promise<void>;
    /**
     * 写入文件
     * @param {String} path 文件路径
     * @param {String} content 写入内容
     * @param {Object} options 配置项
     * @param {String} options.encoding 编码格式
     * @param {Number} options.mode 编码格式
     * @param {String} options.flag 文件系统支持
     * @returns {Promise<void>} 读取结果
     */
    function writeFileAsync(path: string, content: string, { encoding, flag, mode }?: {
        encoding: string;
        mode: number;
        flag: string;
    }): Promise<void>;
}
