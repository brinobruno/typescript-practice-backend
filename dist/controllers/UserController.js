"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailService_1 = require("../services/EmailService");
const users = [
    { name: 'Bruno', email: 'bruno@example.com' }
];
exports.default = {
    async index(_request, response) {
        return response.json(users);
    },
    async create(_request, response) {
        const emailService = new EmailService_1.EmailService();
        emailService.sendMail({
            to: {
                name: 'Bruno Corrêa',
                email: 'bruno@example.com'
            },
            message: {
                subject: 'Typescript',
                body: 'Typescript is really cool'
            },
        });
        return response.send();
    }
};
