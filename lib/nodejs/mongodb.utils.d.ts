export default MongodbHelper;
export class MongodbHelper {
    constructor(config: any);
    _collection: string;
    /**
     * 设置配置项
     * @param {{ host: String, port: Number, user: String, pwd: String, db: String }} config 配置项
     */
    setConfig(config: {
        host: string;
        port: number;
        user: string;
        pwd: string;
        db: string;
    }): void;
    _url: string;
    _db: string;
    /**
     * 设置操作的集合
     * @param {String} collection 操作的集合
     * @returns {MongodbHelper}
     */
    useCollection(collection: string): MongodbHelper;
    /**
     * @returns {Promise<MongoClient>}
     */
    _connect(): Promise<any>;
    query(document?: {}, { amount, page }?: {
        amount?: number;
        page?: number;
    }): Promise<any>;
    insert(documents: any): Promise<any>;
    delete(document: any, isMany: any): Promise<any>;
    update(filter: any, updater: any): Promise<any>;
    updateFromOid(id: any, updater: any): Promise<any>;
    queryFromOid(id: any): Promise<any>;
}
export const mongodbHelper: MongodbHelper;
