"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
class EmailService {
    sendMail({ to, message }) {
        console.log(`email sent to ${to.name}: ${message.subject}`);
    }
}
exports.EmailService = EmailService;
