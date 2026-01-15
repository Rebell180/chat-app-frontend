
export class Chat {
    id: number = 0;
    name: string = '';
    message: string = '';
    createdAt: number = Date.now();

    constructor({id = 0, name = "", message = "", createdAt = Date.now() } = {}) {
        this.id = id;
        this.name = name;
        this.message = message;
        this.createdAt = createdAt;
    }
}