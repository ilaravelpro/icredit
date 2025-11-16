import StoreDataSingle from "ivue3/js/handel/functions/store/data/single.func";

const CreditsSingle = Object.assign({}, StoreDataSingle);
let baseState = CreditsSingle.store.state();

CreditsSingle.init({
    id: 'CreditsSingle',
    state: () => {
        baseState.options.typeForm = 'formData';
        return {
            ...baseState,
            resource: 'credits',
            html: {
                classes: {
                    fields: {
                        global: {
                            section: 'w-full md:w-1/2 lg:w-1/4'
                        }
                    }
                },
            },
            fields: [
                {
                    component: 'i-form-fields',
                    attrs: {
                        css: {
                            section: 'w-full p-0 flex flex-wrap',
                        },
                        items: function ($context) {
                            let fields = [
                                {
                                    component: 'i-select-pro',
                                    attrs: {
                                        label: 'کاربر',
                                        'field-index': `creator_id`,
                                        url: 'users/data',
                                        type: 'array',
                                        search: true,
                                    }
                                },
                                {
                                    component: 'i-input',
                                    attrs: {
                                        label: 'مقدار',
                                        'field-index': `value`,
                                        css: {
                                            field: 'ltr'
                                        }
                                    }
                                },
                                {
                                    component: 'i-select-pro',
                                    attrs: {
                                        label: 'نوع',
                                        'field-index': `type`,
                                        items: [
                                            {
                                                text: 'بالانس',
                                                value: 'balance'
                                            },
                                            {
                                                text: 'باربرگ',
                                                value: 'baarbarg'
                                            }
                                        ]
                                    }
                                },{
                                    component: 'i-input',
                                    attrs: {
                                        label: 'مقدار(ارزی)',
                                        'field-index': `amount`,
                                        css: {
                                            field: 'ltr'
                                        }
                                    }
                                },
                                {
                                    component: 'i-select-pro',
                                    attrs: {
                                        label: 'ارز',
                                        'field-index': `currency`,
                                        items: [
                                            {
                                                text: 'تومان',
                                                value: 'IRT'
                                            },
                                        ]
                                    }
                                },
                                {
                                    component: 'i-select-pro',
                                    attrs: {
                                        label: 'وضعیت',
                                        'field-index': `status`,
                                        url: 'data/statuses/credits',
                                    }
                                },
                            ];
                            return fields;
                        }
                    }
                }
            ]
        }
    },
})

export default CreditsSingle;
