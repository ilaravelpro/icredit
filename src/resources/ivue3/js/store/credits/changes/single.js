import StoreDataSingle from "ivue3/js/handel/functions/store/data/single.func";

const CreditChangesSingle = Object.assign({}, StoreDataSingle);
let baseState = CreditChangesSingle.store.state();

CreditChangesSingle.init({
    id: 'CreditChangesSingle',
    state: () => {
        baseState.options.typeForm = 'formData';
        return {
            ...baseState,
            resource: 'credit_changes',
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
                                    component: 'i-select-pro',
                                    attrs: {
                                        label: 'اعتبار',
                                        'field-index': `credit_id`,
                                        url: 'credits/data',
                                        type: 'array',
                                        search: true,
                                    }
                                },
                                {
                                    component: 'i-input',
                                    attrs: {
                                        label: 'ش. صورتحساب',
                                        'field-index': `number`,
                                    }
                                },
                                {
                                    component: 'i-input',
                                    attrs: {
                                        label: 'ماژول',
                                        'field-index': `modal`,
                                        css: {
                                            field: 'ltr'
                                        }
                                    }
                                },
                                {
                                    component: 'i-input',
                                    attrs: {
                                        label: 'ش. ماژول',
                                        'field-index': `modal_id`,
                                        css: {
                                            field: 'ltr'
                                        }
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
                                    component: 'i-switch',
                                    attrs: {
                                        label: 'کم کردن اعتبار',
                                        'field-index': `is_decrease`,
                                        type: "date",
                                    }
                                },
                                {
                                    component: 'i-input',
                                    attrs: {
                                        label: 'توضیحات',
                                        'field-index': `description`,
                                        type: 'textarea',
                                        css: {
                                            section: 'w-full'
                                        }
                                    }
                                },
                                {
                                    component: 'i-select-pro',
                                    attrs: {
                                        label: 'وضعیت',
                                        'field-index': `status`,
                                        url: 'data/statuses/credit_changes',
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

export default CreditChangesSingle;
