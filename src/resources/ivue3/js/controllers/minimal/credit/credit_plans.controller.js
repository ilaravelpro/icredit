/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/3/21, 7:27 PM
 * Copyright (c) 2021. Powered by iamir.net
 */
const CreditPlansMinimalController = {
    index: {
        name: 'CreditPlansIndex',
        template: {
            component: 'i-datatable-list',
            attrs: {
                resource: 'credit_plans',
                columns: [
                    {label: 'شناسه', name: 'id',},
                    {label: 'عنوان', name: 'title'},
                    {label: 'نوع', name: 'type'},
                    {label: 'مقدار', name: 'value'},
                    {label: 'ارز', name: 'currency'},
                    {label: 'مقدار(ارز)', name: 'amount'},
                ]
            }
        }
    },
    create: {
        name: 'CreditPlansCreate',
        idName: 'id',
        template: {
            component: 'i-page-create',
            attrs: {
                storeNamespace: 'CreditPlansSingle'
            }
        }
    },
    edit: {
        name: 'CreditPlansIndex',
        clone: 'credit_plans.create'
    },
};

export default CreditPlansMinimalController;
