// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injectable } from '@angular/core';
import { CoreCronHandler } from '@services/cron';
import { makeSingleton } from '@singletons';
import { AddonModSurveySync } from '../survey-sync';
import { AddonModSurveySyncCronHandlerService } from '@addons/mod/survey/services/handlers/sync-cron';

/**
 * Synchronization cron handler.
 */
@Injectable( { providedIn: 'root' })
export class AddonModSurveySyncCronHandlerLazyService
    extends AddonModSurveySyncCronHandlerService
    implements CoreCronHandler {

    /**
     * @inheritdoc
     */
    async execute(siteId?: string, force?: boolean): Promise<void> {
        await AddonModSurveySync.syncAllSurveys(siteId, force);
    }

    /**
     * @inheritdoc
     */
    getInterval(): number {
        return AddonModSurveySync.syncInterval;
    }

}
export const AddonModSurveySyncCronHandler = makeSingleton(AddonModSurveySyncCronHandlerLazyService);
