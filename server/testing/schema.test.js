const mongoose = require('mongoose');
const AdminSchema = require('../models/Admin');
const UserSchema = require('../models/User');
const BookingSchema = require('../models/Booking');
const PremiereSchema = require('../models/Premiere');
const UpcomingSchema = require('../models/Upcoming');

describe('Schema Tests', () => {
  test('Admin should be invalid if name is empty', () => {
    const admin = new mongoose.Document({}, AdminSchema);
    admin.validate(err => {
      expect(err.errors.name).toBeDefined();
    });
  });

  test('User should be invalid if name is empty', () => {
    const user = new mongoose.Document({}, UserSchema);
    user.validate(err => {
      expect(err.errors.name).toBeDefined();
    });
  });

  test('Booking should be invalid if userId is empty', () => {
    const booking = new mongoose.Document({}, BookingSchema);
    booking.validate(err => {
      expect(err.errors.userId).toBeDefined();
    });
  });

  test('Premiere should be invalid if title is empty', () => {
    const premiere = new mongoose.Document({}, PremiereSchema);
    premiere.validate(err => {
      expect(err.errors.title).toBeDefined();
    });
  });

  test('Upcoming should be invalid if title is empty', () => {
    const upcoming = new mongoose.Document({}, UpcomingSchema);
    upcoming.validate(err => {
      expect(err.errors.title).toBeDefined();
    });
  });
});