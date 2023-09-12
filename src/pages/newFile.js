import { mapActions, mapGetters } from "vuex";

export default (await import('vue')).defineComponent({
data() {
return {
size: 0,
ownership: {},
owners: [],
address: {},
isValidOwnership: false,
isValidAddress: false,
isValidOwner: false,
isValidPassword: false,
mergingTwoArraysAndRemovingIdenticalMessages,
};
},
methods: {
sendOwnership() {
this.ownership.address = this.address;
this.ownership.owners = this.mapListOwners();
this.updateOwnership(this.ownership).then(() => {
this.$router.push("/show/ownership/" + this.ownership.id);
});
},
plusOwnership() {
this.owners.push({ ownership: { address: {} } });
},
minusOwnership() {
if (this.owners.length > this.size) {
this.owners.length -= 1;
}
},
getIsValidOwnerAndPassword() {
this.owners.forEach(el => {
this.isValidOwner = el.IsValidOwner;
this.isValidPassword = el.IsValidPassword;
});
},
mapListOwners() {
let result = [];
this.owners.forEach((el) => {
let objectOwner = el.owner;
let objectPassword = el.password;
objectOwner.password = objectPassword;
result.push(objectOwner);
});
return result;
},
...mapActions({
fetchOwnership: "ownership/fetchOwnership",
updateOwnership: "ownership/updateOwnership",
fetchCountOwners: "owner/fetchCountOwners",
fetchCountOwnerships: "ownership/fetchCountRooms",
}),
},
mounted() {
this.fetchOwnership(this.$route.params.id).then(() => {
this.fetchCountOwners();
this.fetchCountOwnerships();
this.owners = this.getOwnership.owners;
this.size = this.owners.length;
this.ownership = this.getOwnership;
this.address = this.getOwnership.address;
});
},
computed: {
...mapGetters({
getOwnership: "ownership/getOwnership",
countOwnerships: "ownership/getCountOwnerships",
countOwners: "owner/getCountOwners",
getMessagesOwnership: "ownership/getMessages",
getMessagesOwner: "owner/getMessages",
}),
},
});
