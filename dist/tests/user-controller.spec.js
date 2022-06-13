"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmailService_1 = require("../services/EmailService");
const index_1 = require("../index");
const supertest_1 = __importDefault(require("supertest"));
describe('Email service use case', () => {
    it('It should send email', async () => {
        const repository = {
            mailTo: {
                name: 'Bruno Corrêa', email: 'bruno@example.com'
            },
            subject: {
                subject: 'Typescript', body: 'Typescript is really cool'
            }
        };
        const response = await (0, supertest_1.default)(index_1.app).get('/users/create', () => {
            const emailService = new EmailService_1.EmailService();
            emailService.sendMail({
                to: repository.mailTo,
                message: repository.subject
            });
        });
        expect(response).toBeTruthy();
    });
});
