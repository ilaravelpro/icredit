import StoreDataSingle from "ivue3/js/handel/functions/store/data/single.func";

const CreditPlansSingle = Object.assign({}, StoreDataSingle);
let baseState = CreditPlansSingle.store.state();

CreditPlansSingle.init({
    id: 'CreditPlansSingle',
    state: () => {
        baseState.options.typeForm = 'formData';
        return {
            ...baseState,
            resource: 'credit_plans',
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
                                    component: 'i-input',
                                    attrs: {
                                        label: 'عنوان',
                                        'field-index': `title`,
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
                                    component: 'i-input',
                                    attrs: {
                                        label: 'حداقل تعداد',
                                        'field-index': `count_min`,
                                        css: {
                                            field: 'ltr'
                                        }
                                    }
                                },
                                {
                                    component: 'i-input',
                                    attrs: {
                                        label: 'حداکثر تعداد',
                                        'field-index': `count_max`,
                                        css: {
                                            field: 'ltr'
                                        }
                                    }
                                },
                                {
                                    component: 'i-switch',
                                    attrs: {
                                        label: 'امکان سفارش تعدادی',
                                        'field-index': `is_counting`,
                                    }
                                },
                                {
                                    component: 'i-select-pro',
                                    attrs: {
                                        label: 'وضعیت',
                                        'field-index': `status`,
                                        url: 'data/statuses/credit_plans',
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

export default CreditPlansSingle;
