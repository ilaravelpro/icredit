/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/3/21, 7:27 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

const CreditsMinimalController = {
    index: {
        name: 'CreditsIndex',
        template: {
            component: 'i-datatable-list',
            attrs: {
                resource: 'credits',
                columns: [
                    {
                        label: 'شناسه',
                        name: 'id',
                    },
                    {label: 'کاربر', name: 'creator_id.text'},
                    {label: 'نوع', name: 'type'},
                    {label: 'مقدار', name: 'value'},
                    {label: 'ارز', name: 'currency'},
                    {label: 'مقدار(ارز)', name: 'amount'},
                ]
            }
        }
    },
    create: {
        name: 'CreditsCreate',
        idName: 'id',
        template: {
            component: 'i-page-create',
            attrs: {
                storeNamespace: 'CreditsSingle'
            }
        }
    },
    edit: {
        name: 'CreditsIndex',
        clone: 'credits.create'
    },
};

export default CreditsMinimalController;
