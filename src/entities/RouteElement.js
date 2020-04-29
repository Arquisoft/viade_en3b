class RouteElement {
    constructor(latitude, longitude, elevation) {

        this.latitude = latitude;
        this.longitude = longitude;
        if(elevation==undefined){
            this.elevation = 0;
        }
        else{
            this.elevation = elevation;
        }
    }

    getName() {
        return this.name;
    }

    getLatitude() {
        return this.latitude;
    }

    getElevation() {
        return this.elevation;
    }

    getLongitude() {
        return this.longitude;
    }

    toJsonLatLng() {
        return {
            "latitude": this.latitude,
            "longitude": this.longitude,
            "elevation":this.elevation,
        };
    }
}

export default RouteElement;