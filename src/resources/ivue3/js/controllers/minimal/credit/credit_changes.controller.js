/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/3/21, 7:27 PM
 * Copyright (c) 2021. Powered by iamir.net
 */


const CreditChangesMinimalController = {
    index: {
        name: 'CreditChangesIndex',
        template: {
            component: 'i-datatable-list',
            attrs: {
                resource: 'credit_changes',
                columns: [
                    {
                        label: 'شناسه',
                        name: 'id',
                    },
                    {label: 'کاربر', name: 'creator_id.text'},
                    {label: 'کم کردن', name: 'is_decrease'},
                    {label: 'مقدار', name: 'value'},
                    {label: 'ارز', name: 'currency'},
                    {label: 'مقدار(ارز)', name: 'amount'},
                ]
            }
        }
    },
    create: {
        name: 'CreditChangesCreate',
        idName: 'id',
        template: {
            component: 'i-page-create',
            attrs: {
                storeNamespace: 'CreditChangesSingle'
            }
        }
    },
    edit: {
        name: 'CreditChangesIndex',
        clone: 'credit_changes.create'
    },
};

export default CreditChangesMinimalController;
