interface reservationRequest {
  departureSite: Number;
  departureMeetingPoint: Number;
  departureDate: String;
  arrivalDate: String;
  arrivalSite: Number;
  arrivalMeetingPoint: Number;
  departureHour: String;
  arrivalHour: String;
  departFlightNumber?: String;
  arrivFlightNumber?: String;
  notes?: String;
}

export { reservationRequest };
