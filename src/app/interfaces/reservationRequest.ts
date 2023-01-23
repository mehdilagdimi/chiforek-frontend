interface reservationRequest {
  departureSite: Number;
  departureMeetingPoint: Number;
  departureDate: String;
  arrivalDate: String;
  arrivalSite: Number;
  arrivalMeetingPoint: Number;
  departureHour: String;
  arrivalHour: String;
  departureFlightNumber?: String;
  arrivalFlightNumber?: String;
  notes?: String;
}

export { reservationRequest };
