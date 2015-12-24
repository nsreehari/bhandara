



from openerp import models, fields, api




#class zvent_registration(models.Model):
#    _name = 'zvent.registration'
#    _order = 'name, create_date desc'
#
#    name = fields.Char(string='Volunteer Name', required=True)
#    zvent_id = fields.Many2one( 'zvent.zvent', string='Event', required=True)
#    email = fields.Char(string='Email')
#    phone = fields.Char(string='Phone')
#    count = fields.Integer(string='Number of Volunteers', default=1, required=True)
#
#
#class zvent_zvent(models.Model):
#    _name = 'zvent.zvent'
#    _order = 'name, create_date desc'
#
#
#    name = fields.Char(string='Event Name', required=True)
#    startDate = fields.Datetime(string='Start Date')
#    endDate = fields.Datetime(string='End Date')
#    startTime = fields.Char(string='Start Time', size=5)
#    endTime = fields.Char(string='End time', size=5)
#        
#    requiredVolunteers = fields.Integer(string='Required Volunteers', default=0, required=True)
#
#    center = fields.Char(string='Center', required=True)
#    venue = fields.Char(string='Venue', required=True)
#    locality = fields.Char(string='Locality', required=True)
#    category = fields.Char(string='Category', required=True)
#
#    coordinatorName = fields.Char(string='Coordinator Name')
#    coordinatorPhone = fields.Char(string='Coordinator Phone')
#    coordinatorEmail = fields.Char(string='Coordinator Email')
#
#    eventId = fields.Integer(compute='_compute_zvent')
#    eventName = fields.Char(compute='_compute_zvent')
#    registeredVolunteers = fields.Integer(compute='_compute_zvent', store=True)
#
#
#    # Registration fields
#    registration_ids = fields.One2many(
#        'zvent.registration', 'zvent_id', string='Volunteers')
#
#
#    @api.depends('name', 'registration_ids')
#    def _compute_zvent(self):
#        for record in self:
#            record.eventId = record.id
#            record.eventName = record.name
#            count = 0
#            for r in record.registration_ids:
#                count += r.count
#            record.registeredVolunteers = count
#
#

class bhandara_volunteers(models.Model):
    _name = 'bhandara.volunteers'
    _order = 'name, create_date desc'

    abhyasiid = fields.Char(string='Abhyasi ID', required=True)
    name = fields.Char(string='Volunteer Name', required=True)
    email = fields.Char(string='Email')
    phone = fields.Char(string='Phone')
    count = fields.Integer(string='Number of Volunteers', help='Include any friends for which you are the primary contact', default=1, required=True)
    skills = fields.Char(string='Skills')
    center = fields.Char(string='Center')
    locality = fields.Char(string='Locality')
    transport = fields.Char(string='Locality')


class bhandara_abhyasis(models.Model):
    _name = 'bhandara.abhyasis'

    abhyasiid = fields.Char(string='Abhyasi ID', required=True)
    salutation = fields.Char(string='Salutation')
    name = fields.Char(string='Abhyasi Name', required=True)
    center = fields.Char(string='Center', required=True)
    email = fields.Char(string='Email')
    phone = fields.Char(string='Phone')
    age = fields.Integer(string='Age')
    doa = fields.Datetime(string='Date of Arrival')
    dod = fields.Datetime(string='Date of Departure')


class volunteer_needs(models.Model):
    _name = 'bhandara.vneeds'

    name = fields.Char(string='Contact Person', required=True)
    mobile = fields.Char(string='Contact Phone', size=12, required=True)
    email = fields.Char(string='Contact Email', required=True)
    project = fields.Char(string='Project', required=True)
    work = fields.Char(string='Work Description', required=True)
    numvolunteers = fields.Char(string='Number of Volunteers', required=True)
    skills = fields.Char(string='Skills', required=True)
    fromdate = fields.Date(string='From Date', required=True)
    todate = fields.Date(string='To Date', required=True)
    days = fields.Selection( [( 'weekdays', 'Weekdays'),
                    ('weekends', 'Saturdays and Sundays'),   
                    ('monday', 'Mondays'),   
                    ('tuesday', 'Tuesdays'),   
                    ('wednesday', 'Wednesdays'),   
                    ('thursday', 'Thursdays'),   
                    ('friday', 'Fridays'),   
                    ('saturday', 'Saturdays'),   
                    ('sunday', 'Sundays'),   
                    ('anyday', 'All Days')],   
                    string='Days', required=True)



class bus_timings(models.Model):
    _name = 'bhandara.buses'

    name = fields.Char(string='Pickup Place', required=True)
    starttime = fields.Char(string='Bus Start Time', required=True)
    arrivaltime = fields.Char(string='Bus Arrival Time', required=True)
    droplocation = fields.Char(string='Bus Drop Location', required=True)
    directions = fields.Char(string='Directions from drop place to Kanha', required=True)

class train_timings(models.Model):
    _name = 'bhandara.trains'

    name = fields.Char(string='Train Name', required=True)
    fromstation = fields.Char(string='From Station', required=True)
    fromtime = fields.Char(string='From Time', required=True)
    dropstation = fields.Char(string='Drop Station', required=True)
    droptime = fields.Char(string='Drop Time', required=True)
    directions = fields.Char(string='Directions from drop place to Kanha', required=True)



class hotels(models.Model):
    _name = 'bhandara.hotels'

    name = fields.Char(string='Hotel Name', required=True)
    address = fields.Char(string='Address', required=True)
    distance = fields.Char(string='Distance from Kanha', required=True)
    hotelcontact = fields.Char(string='Hotel Contact Person and Number', required=True)
    volunteercontact = fields.Char(string='Volunteer Name and Contact', required=True)
    directions = fields.Char(string='Directions from hotel to Kanha', required=True)



class pocs(models.Model):
    _name = 'bhandara.pocs'

    name = fields.Char(string='Name', required=True)
    phone = fields.Char(string='Phone', required=True)
    department = fields.Char(string='Area or Department', required=True)
    email = fields.Char(string='Email')
    center = fields.Char(string='Center', required=True)




