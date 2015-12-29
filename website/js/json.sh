
echo > p1index.js
echo "localjsons=1" >> p1index.js

echo 'vneeds='''`curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.vneeds?cols=name,project,mobile,work,fromdate,todate,days,skills,numvolunteers`''';' >> p1index.js

echo 'buses='''`curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.buses?cols=name,starttime,arrivaltime,droplocation,directions`''';' >> p1index.js
echo 'trains='''`curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.trains?cols=name,fromstation,fromtime,dropstation,droptime,directions`''';' >> p1index.js

echo 'hotels='''`curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.hotels?cols=name,address,distance,hotelcontact,volunteercontact,directions`''';' >> p1index.js
echo 'pocs='''`curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.pocs?cols=name,phone,department,email,center`''';' >> p1index.js




