export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public gender: string,
        public hiking?: string,
        public running?: string,
        public swimming?: string
    ) { }
}
