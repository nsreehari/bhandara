
from openerp import models, fields, api


class bhandara_depts(models.Model):
    _name = 'bhandara.depts'

    name = fields.Char(string='Dept Name', required=True)


class bhandara_volunteersdb(models.Model):
    _name = 'bhandara.volunteersdb'
    _order = 'name, create_date desc'

    name = fields.Char(string='Volunteer Name', required=True)
    abhyasiid = fields.Char(string='Abhyasi ID', required=True)
    centre = fields.Char(string='Centre', required=True)
    phone = fields.Char(string='Contact No.', required=True)
    email = fields.Char(string='Mail ID')
    gender = fields.Char(string='Male/Female', required=True)
    age = fields.Integer(string='Age (as of Jan 2016)', required=True)





