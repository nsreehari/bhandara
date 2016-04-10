
from openerp import models, fields, api


class bhandara_depts(models.Model):
    _name = 'bhandara.depts'

    name = fields.Char(string='Dept Name', required=True)


class bhandara_volunteersdb(models.Model):
    _name = 'bhandara.volunteersdb'
    _order = 'name, create_date desc'

    name = fields.Char(string='Name', required=True)
    abhyasiid = fields.Char(string='Abhyasi ID', required=True)
    centre = fields.Char(string='Centre', required=True)
    phone = fields.Char(string='Contact No.', required=True)
    email = fields.Char(string='Mail ID')
    gender = fields.Selection([('Brother', 'Brother'), ('Sister', 'Sister')], string='Brother/Sister', required=True)
    age = fields.Integer(string='Age', required=True)

    dept_ids = fields.Many2many('bhandara.depts', string='Departments', required=True)
    doa = fields.Char(string='Date of Arrival')
    dod = fields.Char(string='Date of Departure')

    _sql_constraints = [('abhyasiid_uniq', 'unique(abhyasiid)', 'Abhyasi ID already exists')]



