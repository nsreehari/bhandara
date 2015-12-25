
curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.vneeds?cols=name,project,mobile,work,fromdate,todate,days,skills,numvolunteers > vneeds.json

curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.buses?cols=name,starttime,arrivaltime,droplocation,directions > buses.json

curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.trains?cols=name,fromstation,fromtime,dropstation,droptime,directions > trains.json

curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.pocs > pocs.json

curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.hotels?cols=name,address,distance,hotelcontact,volunteercontact,directions > hotels.json


