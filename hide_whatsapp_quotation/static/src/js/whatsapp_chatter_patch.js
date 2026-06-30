/** @odoo-module **/
import { patch } from "@web/core/utils/patch";
import { Chatter } from "@mail/chatter/web_portal/chatter";
import { useService } from "@web/core/utils/hooks";
import { useState, useEffect } from "@odoo/owl";

patch(Chatter.prototype, {
    setup() {
        super.setup();
        this.orm = useService("orm");
        this.hideWhatsapp = useState({ value: false });

        useEffect(
            () => {
                const thread = this.state?.thread;

                if (thread && thread.id) {
                    // Sale Order - hide on draft/sent
                    if (thread.model === "sale.order") {
                        this.orm.read("sale.order", [thread.id], ["state"]).then((result) => {
                            if (result && result.length) {
                                this.hideWhatsapp.value = ["draft", "sent"].includes(result[0].state);
                            }
                        });
                    }
                    // Purchase Order - hide on draft/sent
                    else if (thread.model === "purchase.order") {
                        this.orm.read("purchase.order", [thread.id], ["state"]).then((result) => {
                            if (result && result.length) {
                                this.hideWhatsapp.value = ["draft", "sent"].includes(result[0].state);
                            }
                        });
                    }
                    else {
                        this.hideWhatsapp.value = false;
                    }
                } else {
                    this.hideWhatsapp.value = false;
                }
            },
            () => [
                this.state?.thread?.id,
                this.state?.thread?.model,
                this.state?.thread?.messages?.length,
            ]
        );
    },
});
