import ContactModel from "@/models/contactmodels.js"

const contacts = {
    motive : [new ContactModel('Sziklai Tamás', '+36 23 886 914', '+36 30 267 2348', 'tamas.sziklai@hu.enersys.com'),
              new ContactModel('Hoffer Péter', '+36 23 886 915', '+36 30 444 6628', 'peter.hoffer@hu.enersys.com'),
              new ContactModel('Magyar Dóra', '+36 23 886 924', '+36 30 338 0413', 'dora.magyar@hu.enersys.com'),
              new ContactModel('Pozderka László', '+36 23 886 925', '+36 30 951 2147', 'laszlo.pozderka@hu.enersys.com')],
    reserve: [new ContactModel('Kun Mariann', '+36 23 886 926', '+36 30 866 6610', 'marianna.kun@hu.enersys.com'),
              new ContactModel('Brachna Gábor', '+36 23 886 916', '+36 30 595 2062', 'gabor.brachna@hu.enersys.com')],
    service: [new ContactModel('Oszlár Zsolt', '+36 23 886 920', '+36 30 600 9771', 'zsolt.oszlar@hu.enersys.com'),
              new ContactModel('Simon Attila', '+36 23 886 921', '+36 30 334 0860', 'attila.simon@hu.enersys.com'),
              new ContactModel('Polgár Ildikó', '+36 23 886 918', null, 'ildiko.polgar@hu.enersys.com')]
  };


export { ContactModel , contacts as default }