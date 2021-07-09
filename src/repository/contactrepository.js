import ContactModel from "@/models/contactmodels.js"

const contacts = {
    reserve : [new ContactModel('Sziklai Tamás', '+36 23 886 914', '+36 30 267 2348', 'tamas.sziklai@hu.enersys.com'),
              new ContactModel('Hoffer Péter\n', '+36 23 886 915', '+36 30 444 6628', 'peter.hoffer@hu.enersys.com'),
              new ContactModel('Magyar Dóra\n', '+36 23 886 924', '+36 30 338 0413', 'dora.magyar@hu.enersys.com'),
              new ContactModel('Pozderka László\n', '+36 23 886 925', '+36 30 951 2147', 'laszlo.pozderka@hu.enersys.com')],
    motive: [new ContactModel('Kun Mariann', '+36 23 886 926', '+36 30 866 6610', 'marianna.kun@hu.enersys.com'),
              new ContactModel('Suri Ábel\n', '+36 23 886 922\n', '+36 30 583 8387\n', 'abel.suri@hu.enersys.com\n')],
    service: [new ContactModel('Oszlár Zsolt', '+36 23 886 920', '+36 30 600 9771', 'zsolt.oszlar@hu.enersys.com'),
              new ContactModel('Simon Attila', '+36 23 886 921', '+36 30 334 0860', 'attila.simon@hu.enersys.com'),
              new ContactModel('Polgár Ildikó', '+36 23 886 918', null, 'ildiko.polgar@hu.enersys.com')]
  };


export { ContactModel , contacts as default }