const MAP_LIST = [
 {"map_name":"A Balanced AI Generated Chile","map_id":"6430f6ae803b91d398056286","user_name":"John Harvey Kellogg","count":86397,"type":"Generated","category":"Country","country":"Chile","country_code":"CL","tags":["South America"]},
 {"map_name":"A Balanced AI Generated India","map_id":"62e10035c97fc44e29bd8e0e","user_name":"John Harvey Kellogg","count":102445,"type":"Generated","category":"Country","country":"India","country_code":"IN","tags":["Asia"]},
 {"map_name":"A Balanced Australia","map_id":"60afb9b2dcdbe60001438fa6","user_name":"slashP","count":60330,"type":"Generated","category":"Country","country":"Australia","country_code":"AU","tags":["Oceania"]},
 {"map_name":"A Balanced Brazil","map_id":"61df8477a94f5d0001ef9f2c","user_name":"Steve","count":100000,"type":"Generated","category":"Country","country":"Brazil","country_code":"BR","tags":["South America"]},
 {"map_name":"A Balanced Canada","map_id":"61067f9608061c000157a851","user_name":"slashP","count":60000,"type":"Generated","category":"Country","country":"Canada","country_code":"CA","tags":["North America"]},
 {"map_name":"A Balanced Malaysia","map_id":"634050c7fc09dbb1e6c107c6","user_name":"Souvlaki Zeitgeist","count":101990,"type":"Generated","category":"Country","country":"Malaysia","country_code":"MY","tags":["Asia"]},
 {"map_name":"A Balanced Russia","map_id":"62e309bfac02fca31aa404b8","user_name":"Alok","count":100136,"type":"Generated","category":"Country","country":"Russia","country_code":"RU","tags":["Europe","Asia"]},
 {"map_name":"A Balanced South Africa","map_id":"62eb2b6e9e3a000003c039ad","user_name":"Jupa","count":49856,"type":"Generated","category":"Country","country":"South Africa","country_code":"ZA","tags":["Africa"]},
 {"map_name":"A Balanced Spain","map_id":"62f439cfe46df79befe5c5f8","user_name":"John Harvey Kellogg","count":100000,"type":"Generated","category":"Country","country":"Spain","country_code":"ES","tags":["Europe"]},
 {"map_name":"A Balanced World","map_id":"5d73f83d82777cb5781464f2","user_name":"Debre","count":21600,"type":"Handpicked","category":"World"},
 {"map_name":"A Community Europe","map_id":"642879e3292b51987fb56fe0","user_name":"Simi","count":43688,"type":"Handpicked","category":"Continent","tags":["Europe"]},
 {"map_name":"A Community USA","map_id":"635c797dac045a96b9333016","user_name":"UltraTech66","count":49995,"type":"Handpicked","category":"Country","country":"United States of America","country_code":"US","tags":["North America"]},
 {"map_name":"A Community World","map_id":"62a44b22040f04bd36e8a914","user_name":"MatePotato","count":103644,"type":"Handpicked","category":"World","tags":["Pinpointable"]},
 {"map_name":"A Pinpointable World","map_id":"6029991c5048850001d572a9","user_name":"ttv.Sverre","count":3798,"type":"Handpicked","category":"World","tags":["Pinpointable"]},
 {"map_name":"A Rural World","map_id":"5be0de51fe3a84037ca36447","user_name":"Topotic (YT)","count":22465,"type":"Handpicked","category":"World","tags":["Rural"]},
 {"map_name":"A Skewed World","map_id":"6165f7176c26ac00016bca3d","user_name":"Mars","count":65514,"type":"Generated","category":"World"},
 {"map_name":"AI gen - Argentina","map_id":"62af3a91e924b273d60d6c1e","user_name":"Kodiak","count":50817,"type":"Generated","category":"Country","country":"Argentina","country_code":"AR","tags":["South America"]},
 {"map_name":"AI gen - Indonesia","map_id":"619086606e5572000185a1db","user_name":"Kodiak","count":105955,"type":"Generated","category":"Country","country":"Indonesia","country_code":"ID","tags":["Asia"]},
 {"map_name":"AI gen - Mexico","map_id":"63382d2cc00816fde6cd69b6","user_name":"Kodiak","count":104951,"type":"Generated","category":"Country","country":"Mexico","country_code":"MX","tags":["North America"]},
 {"map_name":"AI gen - New Zealand","map_id":"61f3f49330ad7100010d56c2","user_name":"Kodiak","count":50001,"type":"Generated","category":"Country","country":"New Zealand","country_code":"NZ","tags":["Oceania"]},
 {"map_name":"AI gen - Norway","map_id":"6256b73b244c43c4448b6e45","user_name":"Kodiak","count":50600,"type":"Generated","category":"Country","country":"Norway","country_code":"NO","tags":["Europe"]},
 {"map_name":"AI Generated World","map_id":"5dbaf08ed0d2a478444d2e8e","user_name":"RollinHill","count":135763,"type":"Handpicked","category":"World"},
 {"map_name":"An Arbitrary Europe","map_id":"60788ebfb15d750001929514","user_name":"slashP","count":84779,"type":"Generated","category":"Continent","tags":["Europe"]},
 {"map_name":"An Arbitrary Latin America","map_id":"61884a0928f77c000186f0ad","user_name":"John Harvey Kellogg","count":101234,"type":"Generated","category":"Other","tags":["North America","South America"]},
 {"map_name":"An Arbitrary Rural World","map_id":"643dbc7ccc47d3a344307998","user_name":"slashP","count":112558,"type":"Generated","category":"World","tags":["Rural"]},
 {"map_name":"An Arbitrary South America","map_id":"608e85f537802100018242e6","user_name":"slashP","count":50115,"type":"Generated","category":"Continent","tags":["South America"]},
 {"map_name":"An Arbitrary United States","map_id":"61dfb63654e4730001e8faf5","user_name":"John Harvey Kellogg","count":83975,"type":"Generated","category":"Country","country":"United States of America","country_code":"US","tags":["North America"]},
 {"map_name":"An Arbitrary World","map_id":"6089bfcff6a0770001f645dd","user_name":"slashP","count":103796,"type":"Generated","category":"World"},
 {"map_name":"An Improved World","map_id":"5b0a80f8596695b708122809","user_name":"Wolftrekker (YT)","count":111537,"type":"Handpicked","category":"World"},
 {"map_name":"An Updated Australia","map_id":"6346e9fa501e83f27df9b372","user_name":"miracle whips","count":104930,"type":"Generated","category":"Country","country":"Australia","country_code":"AU","tags":["Oceania"]},
 {"map_name":"Dirty World","map_id":"63f3ff1e0355e40ded075e0c","user_name":"slashP","count":79757,"type":"Generated","category":"World","tags":["Rural"]},
 {"map_name":"Extreme Regionguessing","map_id":"63cfd5ba9512ebc734807d3d","user_name":"BarrBarrBinks","count":105002,"type":"Generated","category":"World"},
 {"map_name":"Japan • 日本 60k+","map_id":"59cf49695d2de4db80351e6e","user_name":"Ustatsch","count":62157,"type":"Handpicked","category":"Country","country":"Japan","country_code":"JP","tags":["Asia"]},
 {"map_name":"Plonk It","map_id":"617033a3759abb000106b3cb","user_name":"Scrypero","count":6853,"type":"Handpicked","category":"World"},
 {"map_name":"Plonk It Extreme","map_id":"63b9865cbb7d2fa004826bbc","user_name":"Scrypero","count":680,"type":"Handpicked","category":"World"},
 {"map_name":"Regionguessing","map_id":"62e821d51775c653cc836849","user_name":"Steve","count":130052,"type":"Generated","category":"World"},
 {"map_name":"Terminus","map_id":"64919f3c95165ff26469091a","user_name":"RollinHill","count":90639,"type":"Generated","category":"World"}
];

let maps = MAP_LIST.slice();
let selectedCol = 'map_name';
let selectedSortDir = 'asc';

function displayMaps(col, sort_dir) {
	selectedCol = col;
	selectedSortDir = sort_dir;

	maps.sort((a, b) => {
		a = a[col];
		b = b[col];

		if(typeof a === 'string' || typeof b === 'string') {
			if(sort_dir === 'desc') {
				return `${b}`.localeCompare(a);
			}
			return `${a}`.localeCompare(b);
		}

		return sort_dir === 'desc' ? b-a : a-b;
	});
	
	let html = ``;

	for(let map of maps) {
		html += `<tr>`;
		
		html += `<td><a href="https://www.geoguessr.com/maps/${map.map_id}" target="_blank">${map.map_name}</a></td>`;
		html += `<td>${map.user_name}</td>`;
		html += `<td>${map.count.toLocaleString()}</td>`;
		html += `<td>${map.type}</td>`;
		html += `<td>${map.category}</td>`;

		html += `<td><div class="tags">`;

		if(map.tags) {
			for(let tag of map.tags) {
				html += `<span class="tag">${tag}</span>`;
			}
		}else{
			html += `&nbsp;`
		}

		html += `</div></td>`;

		html += `</tr>`;
	}

	document.querySelector('#maps tbody').innerHTML = html;

	document.getElementById('maps').classList.toggle('is-hidden', maps.length === 0);
	document.getElementById('no-results').classList.toggle('is-hidden', maps.length > 0);
	
	for (let th of document.querySelectorAll('#maps th[data-sortable]')) {
		if(th.dataset.col === col) {
			th.dataset.sortDir = sort_dir;
		}else{
			th.dataset.sortDir = undefined;
		}
	}
}

function filterList() {
	const searchVal = document.getElementById('search').value.toLowerCase().trim();
	const shouldSearch = (!!searchVal && searchVal.length > 0);

	const filterList = {
		locations: document.getElementById('filter-locs').value,
		type: document.getElementById('filter-type').value,
		category: document.getElementById('filter-category').value,
		tag: document.getElementById('filter-tag').value,
	}

	maps = MAP_LIST.slice().filter(map => {
		// location count filter
		switch(filterList.locations) {
			case '5k': if(map.count < 5e3) return false; break;
			case '10k': if(map.count < 10e3) return false; break;
			case '25k': if(map.count < 25e3) return false; break;
			case '50k': if(map.count < 50e3) return false; break;
			case '75k': if(map.count < 75e3) return false; break;
			case '100k': if(map.count < 100e3) return false; break;
		}

		// type filter
		if(filterList.type && filterList.type.length > 0) {
			if(map.type !== filterList.type) return false;
		}

		// category filter
		if(filterList.category && filterList.category.length > 0) {
			if(map.category !== filterList.category) return false;
		}

		// tag filter
		if(filterList.tag && filterList.tag.length > 0) {
			if(!map.tags || !map.tags.includes(filterList.tag)) return false;
		}
		
		// search query
		if(shouldSearch) {
			const terms = searchVal.split(' ');
			let matched = 0;

			termSearch: for(let term of terms) {
				term = term.trim();
				if(term.length === 0) continue;

				for(const col of ['map_name', 'user_name', 'country', 'country_code']) {
					if(typeof map[col] !== 'string') continue;

					if(map[col].toLowerCase().includes(term)) {
						matched++;
						continue termSearch;
					}
				}
				
				if(map.tags) {
					for(const tag of map.tags) {
						if(tag.toLowerCase().includes(term)) {
							matched++;
							continue termSearch;
						}
					}
				}
			}

			return matched == terms.length;
		}

		return true;
	});

	displayMaps(selectedCol, selectedSortDir);
}

function clickedSortableCol(e) {
	e.preventDefault();

	const col = e.target.dataset.col;
	const dir = e.target.dataset.sortDir === 'asc' ? 'desc' : 'asc';

	displayMaps(col, dir);
}

function getTags() {
	const tagSet = new Set();
	for(const map of maps) {
		if(!map.tags) continue;

		for(const tag of map.tags) {
			tagSet.add(tag);
		}
	}

	const tagList = Array.from(tagSet).sort((a, b) => a.localeCompare(b));
	
	const tagSelect = document.getElementById('filter-tag');
	for(const tag of tagList) {
		tagSelect.innerHTML += `<option value="${tag}">${tag}</option>`;
	}
}

function init() {
	for (let th of document.querySelectorAll('#maps th[data-sortable]')) {
		th.addEventListener('click', clickedSortableCol);
	}

	displayMaps(selectedCol, selectedSortDir);

	getTags();

	document.getElementById('search').addEventListener('change', filterList);
	document.getElementById('search').addEventListener('keyup', filterList);
	document.getElementById('filter-locs').addEventListener('change', filterList);
	document.getElementById('filter-type').addEventListener('change', filterList);
	document.getElementById('filter-category').addEventListener('change', filterList);
	document.getElementById('filter-tag').addEventListener('change', filterList);
}

init();
