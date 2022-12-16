import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/errors/send-notification';
import { DatabaseModule } from 'src/infra/database/database.module';
import { NotificationsController } from './infra/http/controllers/notifications.controller';
import { CancelNotification } from '@application/use-cases/errors/cancel-notification';
import { CountRecipientNotifications } from '@application/use-cases/errors/count-recipient-notification';
import { GetRecipientNotifications } from '@application/use-cases/errors/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/errors/read-notification';
import { UnreadNotification } from '@application/use-cases/errors/unread-notification';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification,    
    ],
})
export class HttpModule {}