import { mapActions, mapGetters } from "vuex";

export default (await import('vue')).defineComponent({
data() {
return {
ownership: {},
address: {},
owners: [{}],

isValidOwnership: false,
isValidOwner: false,
isValidAddress: false,
isValidPassport: false,

SEND_TO_SERVER, OWNER_CREATE, OWNER_DELETE,
PAGE_SHOW_OWNERSHIP,

mergingTwoArraysAndRemovingIdenticalMessages,
};
},
methods: {
sendOwnership() {
this.ownership.address = this.address;
this.ownership.owners = this.mapListOwners();
this.createOwnership(this.ownership).then(() => {
this.$router.push(PAGE_SHOW_OWNERSHIP + "/" + this.getOwnership.id);
});
},
plusOwnership() {
this.owners.push({});
},
minusOwnership() {
if (this.owners.length > 1) {
this.owners.length -= 1;
}
},
mapListOwners(id) {
let result = [];
this.owners.forEach((el) => {
let objectOwner = el.owner;
let objectPassport = el.passport;
objectOwner.passport = objectPassport;
result.push(objectOwner);
});
return result;
},
...mapActions({
createOwnership: "ownership/createOwnership",
fetchCountOwners: "owner/fetchCountOwners",
fetchCountOwnerships: "ownership/fetchCountRooms",
}),
},
mounted() {
this.fetchCountOwners();
this.fetchCountOwnerships();
},
computed: {
...mapGetters({
countOwners: "owner/getCountOwners",
getOwnership: "owner/getOwnership",
countOwnerships: "ownership/getCountOwnerships",
getMessagesOwnership: "ownership/getMessages",
getMessagesOwner: "owner/getMessages",
getIsLoading: "ownership/getIsLoading",
}),
},
});
