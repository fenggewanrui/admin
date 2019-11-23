import Vue from 'vue';
import {
	Menu,
	Container,
	Header,
	Aside,
	Main,
	MenuItem
} from 'element-ui';

Vue.use(Menu)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(MenuItem)

export default Vue;
// Vue.use(Loading.directive);

// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;