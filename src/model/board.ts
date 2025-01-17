import BaseModel from "./baseModel";
import boardApi from "../api/boardApi";

class Board extends BaseModel {
    bid: string;
    brdname: string;
    title: string;
    flag: number;
    type: string;
    class: string;
    nuser: number;
    moderators: [
        string
    ];
    reason: string;
    read: true;
    total: number;
    last_post_time: number;
    stat_attr: number;
    level_idx: string;
    gid: number;

    key: string;

    constructor(jsonObject: object) {
        super(jsonObject);
    }
}

async function fetchBoards(api: Promise<any>): Promise<Board[]> {
    const jBoards = (await api).data;
    const ret: Board[] = [];
    for (const jBoard of jBoards.list) {
        ret.push(new Board(jBoard));
    }
    return ret;
}

class FetchBoard {
    static async allBoards(): Promise<Board[]> {
        return fetchBoards(boardApi.all());
    }
    static async popularBoards(): Promise<Board[]> {
        return fetchBoards(boardApi.popular());
    }
}

export {Board, FetchBoard};
