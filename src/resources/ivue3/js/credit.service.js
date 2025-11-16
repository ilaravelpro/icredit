import CreditsSingle from './store/credits/single.js';
import CreditChangesSingle from './store/credits/changes/single.js';
import CreditPlansSingle from './store/credits/plans/single.js';

import CreditsMinimalController from "./controllers/minimal/credit/credits.controller.js";
import CreditChangesMinimalController from "./controllers/minimal/credit/credit_changes.controller.js";
import CreditPlansMinimalController from "./controllers/minimal/credit/credit_plans.controller.js";


export const CreditStoreService = [
    CreditsSingle,
    CreditChangesSingle,
    CreditPlansSingle,
];

export const CreditControllerService = {
    credits: CreditsMinimalController,
    credit_changes: CreditChangesMinimalController,
    credit_plans: CreditPlansMinimalController,
};
export const CreditTranslateService = {
    fa: {
        routes: {
            credits: {
                self: 'اعتبارات',
                single: 'اعتبار',
            },
            credit_plans: {
                self: 'پلن های اعتباری',
                single: 'پلن اعتباری',
            },
            credit_changes: {
                self: 'تبادلات اعتبارات',
                single: 'تبادل اعتبارات',
            },
        }
    }
};
export const CreditRouterService = (EventHub, routerService) => {
    return [
        {
            path: '/credit',
            name: 'credit',
            redirect: 'profile',
            children: [
                ...['credits', 'credit_plans', 'credit_changes']
                    .map(name => routerService.generateResource(name, name, EventHub))
            ]
        }
    ]
};

export default {CreditStoreService, CreditControllerService, CreditTranslateService, CreditRouterService};
