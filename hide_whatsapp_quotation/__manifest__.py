{
    'name': 'Hide WhatsApp Button on Quotations',
    'version': '19.0.1.0.0',
    'category': 'Whatsapp',
    'summary': 'Hide the WhatsApp button on Sales and Purchase Quotations while keeping it available for confirmed Orders.',
    'currency': 'USD',
    'price': '2.0',
    'author': 'AS Pvt-Ltd',
    'company': 'AS Pvt-Ltd',
    'maintainer': 'AS Pvt-Ltd',
    'depends': [
        'sale',
        'whatsapp',
    ],
    'assets': {
        'web.assets_backend': [
            'hide_whatsapp_quotation/static/src/js/whatsapp_chatter_patch.js',
            'hide_whatsapp_quotation/static/src/xml/whatsapp_chatter.xml',
        ],
    },
    'images': ['static/description/banner.png'],
    'installable': True,
    'application': True,
    'license': 'LGPL-3',
}
