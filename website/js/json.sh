
echo > p2index.js
echo "localjsons=1" >> p2index.js

echo 'vneeds='''`curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.vneeds?cols=name,project,mobile,work,fromdate,todate,days,skills,numvolunteers`''';' >> p2index.js

echo 'buses='''`curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.buses?cols=name,starttime,arrivaltime,droplocation,directions`''';' >> p2index.js
echo 'trains='''`curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.trains?cols=name,fromstation,fromtime,dropstation,droptime,directions`''';' >> p2index.js

echo 'hotels='''`curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.hotels?cols=name,address,distance,hotelcontact,volunteercontact,directions`''';' >> p2index.js
echo 'pocs='''`curl http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.pocs`''';' >> p2index.js

cat p2index.js.src >> p2index.js
