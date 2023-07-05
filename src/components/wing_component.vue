<template>
    <div class="col-lg-10 col-md-12 mx-auto row mainLeftMenu" style="height:fit-content">
				
				<!-- TEMPLATE copy paste 
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_xxxx d-none">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								xx							
							</div>
						</div>
					</div>-->
				<!-- w1 -->
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w1b1" v-if="w1b1Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Vale Guardian</h5>
							<div class="row px-2">
								<img src="../img/raid/guide/vg_tank_2.png" class="col-6 roundedz">
								<img src="../img/raid/guide/vg_tank_3.png" class="col-6 roundedz">
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">|</h5>
							<div class="row px-2">

								<img src="../img/raid/guide/vg_tank_3.png" class="col-6 roundedz">
								<div class="col-6 text-left">
									<p class="w-100">Split kill guardians (@ 66% & 33%)</p>
									<ul>
										<li>2 or 3 condis to red</li>
										<li>Pull green on blue</li>
										<li>All other on blue & green</li>
									</ul>
								</div>

							</div>
						</div>
					</div>
	
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w1b2" v-if="w1b2Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Spirit Woods</h5>
							<div class="row px-2">
								<iframe class="col-11 mx-auto" height="500px" src="https://www.youtube.com/embed/Ni_-HkRtmm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">mechs</h5>
							<div class="row px-2">
								<ul class="w-100 text-left pt-4">
									<li><b>stability</b></li>
									<li>After gliding off castle wall: 
										<ul>
											<li>Support, Cap points </li>
											<li></li>
										</ul>
									</li>
								</ul>						
							</div>
						</div>
					</div>
	
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w1b3" v-if="w1b3Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Gorseval</h5>
							<div class="row px-2 mx-auto">
								<img class="col-11" style="max-height:500px" src="../img/raid/guide/gorse_platform.png">
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">|</h5>
							<div class="row px-2 text-left">
								<ul class="pt-4">
									<li><b> >70% - start CC phase</b>
										<ul>
											<li> stability </li>
											<li> <i class="fas fa-ban"></i> darkblue ground if possible </li>
										</ul>
									</li>
									<li><b> 66% - after CC phase </b>
										<ul>
											<li><img src="../img/commander/arrow.png"><span> DPS kill adds </span><span class="text-danger">clockwise. </span></li>
											<li> <span class="text-danger">Dudu entangle</span> other adds when they are close to Gorse. </li>
										</ul>
									</li>
									<li><b> >33% - start cc phase</b>
										<ul>
											<li> stability </li>
											<li><i class="fas fa-ban"></i> darkblue ground if possible </li>
											<li class="text-danger"> Try to <b>slow CC until 18% HP</b>. </li>
										</ul >
									</li>
									<li><b> after cc phase</b>
										<ul>
											<li class="text-danger"><b>BIGDeePS !!!</b></li>
										</ul>
									</li>


								</ul>						
							</div>
						</div>
					</div>
	
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w1b4" v-if="w1b4Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Sabetha</h5>
							<div class="row p-2">
								<img class="col-12 mx-auto text-center roundedz" src="../img/raid/guide/sab_cannons.png">
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Cannons</h5>
							<div class="row px-2 pt-3">
								<ul class="col-6 h4 text-center" style="list-style: none;line-height: 50px">
									<h4 class="border-bottom border-primary pb-2">1-3</h4>
									<li>
										<img class="scale2" src="../img/commander/arrow.png">
										<span>8:30</span>
									</li>
									<li>
										<img class="scale2" src="../img/commander/heart.png">
										<span>7:30</span> 
									</li>
									<li>
										<img class="scale2" src="../img/commander/arrow.png">
										<span>6:30</span> 
									</li>
									<li>
										<img class="scale2" src="../img/commander/circle.png">
										<span>5:30</span> 
									</li>
									<li class="text-danger">loop / ignore</li>
								</ul>
								<ul class="col-6 h4 text-center" style="list-style: none;line-height: 50px">
									<h4 class="border-bottom border-primary pb-2">2-4</h4>
									<li>
										<img class="scale2" src="../img/commander/circle.png">
										<span>8:00</span>
									</li>
									<li>
										<img class="scale2" src="../img/commander/square.png">
										<span>7:00</span>
									</li>
									<li>
										<img class="scale2" src="../img/commander/heart.png">
										<span>6:00</span>
									</li>
									<li>
										<img class="scale2" src="../img/commander/square.png">
										<span>5:00</span>
									</li>
									<li class="text-danger">loop / ignore</li>
								</ul>	
							</div>
							<div class="row">
									<div class="col-11 text-center">
										<h5 class="py-2 mt-3 border-top border-bottom border-primary pl-4">Kite</h5>
										<p>Kite stand most west , catch bomb (green circle).</p>
										<p>Throw this to the icon at the right time.</p>
										<p>Must be thrown on a player on the plate.</p>
									</div>
							</div>
						</div>
					</div>
				<!-- w2 -->
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w2b1" v-if="w2b1Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Slothasor</h5>
							<div class="row px-2">
								<img class="col-12 mx-auto text-center roundedz" height="500px" src="../img/raid/guide/sloth_shroom.png">
								<div class="col-2"></div>
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Important Mechs</h5>
							<div class="row pt-3 text-left">
								<ul>
									<li>Fixation (temporary tank)
										<div class="row ml-2">
											<img class="small-ico d-inline-block" src="../img/raid/guide/fixation.png">
											<ul class="d-inline-block"><li>u have aggro , pull sloth slowly forward </li></ul>
										</div>
									</li>
									<li class="pt-3">Poison (sak)
										<div class="row ml-2">
											<img class="small-ico d-inline-block" src="../img/raid/guide/volatile_poison.png">
											<ul class="d-inline-block"><li> drop behind the team (aka run counterclock) </li></ul>
										</div>
									</li>
									<hr>
									<div class="row">
										<li class="col-6">after each CC phase:
											<ul>
												<li>Boons:
													<ul>
														<li>Resolution</li>
														<li>Resistance</li>
														<li>Stability</li>
													</ul>
												</li>
											</ul>
										</li>
										<li class="col-6">Shrooms:
											<ul class="text-left">
												<li><b>S1</b>: <img src="../img/commander/circle.png"> -> <img src="../img/commander/heart.png"> </li>
												<li><b>S2</b>: <img src="../img/commander/heart.png"> -> <img src="../img/commander/square.png"> </li>
												<li><b>S3</b>: <img src="../img/commander/square.png"> -> <img src="../img/commander/star.png"> </li>
												<li><b>S4</b>: <img src="../img/commander/star.png"> -> <img src="../img/commander/circle.png"> </li>
												<li class="text-danger"> loop </li>
											</ul>
										</li>
									</div>
								</ul>
							</div>
						</div>
					</div>
	
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w2b2" v-if="w2b2Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Bandit Trio</h5>
							<div class="row px-2 h-100 pb-5">
								<iframe class="col-11 mx-auto" height="500px" src="https://www.youtube.com/embed/ncVYseut8ag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2 text-left">
								<ul>
									<li><b> Gather</b>: HoneyCombs & Oil Kegs </li>
									<li><b> Defend Cage</b>: Saboteurs & Mortars </li>
									<hr>
									<li><b> Mortars: </b> fully CC adds before they create a mortar. JOB DONE, repeat </li>
									<li><b> Saboteurs: </b> pull/snare/slow/cripple and kill , they drop bomb on cage. </li>
								</ul>
							</div>
							<hr>
							<div class="row px-2">
								<ol class="text-left">
									<li><b> Berg: </b> 
										<ul>
											<li>HoneyComb on Berg </li>
										</ul>
                                    </li>
									<li><b> Zane: </b>
										<ul>
											<li> Stack south </li>
											<li> Release 50% warges  </li>
										</ul>
									</li>
									<li><b> Neralla: </b> 
										<ul>
											<li>Oil Keg on Narella </li>
											<li>Release 50% warges </li>
										</ul>
									</li>
								</ol>
							</div>
						</div>
					</div>
	
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w2b3" v-if="w2b3Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Matthias Gabrel</h5>
							<div class="row px-2">
								<iframe class="col-11 mx-auto" height="500px" src="https://www.youtube.com/embed/q99ocDpSnAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2 text-left">
								<ul>
									<li><b>Reflect:</b>
										<ul>
											<li> Guardian 
												<ul>
													<li>Core:
														<ul>
															<li> Wall of Reflection </li>
														</ul>
													</li>
													<li>Firebrand:
														<ul>
															<li> Chapter 3: Bulwark </li>
														</ul>
													</li>

												</ul>
											</li>
											<li> Mesmer
												<ul>
													<li>Core:
														<ul>
															<li> Feedback </li>
														</ul>
													</li>
												</ul>
											</li>
											<li> Thief
												<ul>
													<li>Core:
														<ul>
															<li> Smoke Screen </li>
														</ul>
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
								<hr>
								<ul class="text-danger pt-2">
									<li><img class="small-ico" src="../img/raid/guide/volatile_poison.png"></li>
									<li>Always put poison<b> (sak) between fountains</b> , never on it!</li>
									<li><i>Poison Icon & Orange Circle</i> or <b>(no-sak) go in the fountain!</b> </li> 
								</ul>			
							</div>
						</div>
					</div>
				<!-- w3 -->
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w3b1" v-if="w3b1Click > 0">
						<div class="col-6  border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Escort</h5>
							<div class="row px-2">
								<iframe class="col-11 mx-auto" height="500px" src="https://www.youtube.com/embed/WFwcnj74lwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2 text-left">
								<ul>
									<li>BW     -> BS  / someone with high dps and root-abilities.</li>
									<li>Tower  -> Chron / Portal Peepz up </li>
									<li>Glenna -> Dudu / Lure her in safe spots </li>
								</ul>							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w3b2" v-if="w3b2Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Keep Construct</h5>
							<div class="row px-2">
								<iframe class="col-11 mx-auto" height="500px" src="https://www.youtube.com/embed/QIdzfDtxaFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								<ul>
									<li>Tank</li>
									<li>Tower  -> Chron / Portal Peepz up </li>
									<li>Glenna -> Dudu / Lure her in safe spots </li>
								</ul>							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w3b3" v-if="w3b3Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Twisted Castle</h5>
							<div class="row px-2">
								<iframe class="col-11 mx-auto" height="500px" src="https://www.youtube.com/embed/mRwLCQ7rUTw?start=14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								<ul>
									<h5>Skip</h5>
									<li>Dudu -> staff 3 </li>
									<li>DH -> F2 , GS </li>
									<li>Engi -> Rocket boots </li>
								</ul>						
							</div>
						</div>
					</div>
	
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w3b4" v-if="w3b4Click > 0">
						<div class="col-6 text-center border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary">Xera (&gt 50%)</h5>
							<div class="row px-2">
								<div class="d-block w-100 mx-auto text-center pb-2"><img class="col-md-12 col-xl-9 px-2 pb-2 rounded" src="../img/raid/guide/xera_tank_01.png"></div>
								
								<div class="col-2"></div>
								<ol class="col-5 text-left pl-4">
									<li>
										<img src="../img/commander/cross.png">
										<span> -left </span>
										<p class="text-danger font-italic"> after wall</p>
									</li>
									<li>
										<img src="../img/commander/arrow.png">
										<span> -down </span>
										<p class="text-danger font-italic"> after laser </p>
									</li>
									<li>
										<img src="../img/commander/cross.png">
										<span> -right -top </span>
										<p class="text-danger font-italic"> group clear circle</p>
									</li>
								</ol>
								<ol class="col-5 text-left" start="4">
									<li>
										<img src="../img/commander/circle.png">
										<span> -right </span>
										<p class="text-danger font-italic"> after laser </p>
									</li>
									<li>
										<img src="../img/commander/cross.png">
										<span> -down </span>
										<p class="text-danger font-italic"> after Xera </p>
									</li>
									<li>
										<img src="#" style="visibility:hidden;">
										<span>Platforms</span>
									</li>
								</ol>
								<div class="col-1"></div>
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary">Xera (&lt 50%)</h5>
							<div class="row px-2">
								
								<div class="d-block w-100 mx-auto text-center pb-2"><img class="col-md-12 col-xl-9 px-2 pb-2 rounded" src="../img/raid/guide/xera_tank_02.png"></div>
								
								<div class="col-2"></div>
								<ol class="col-5 text-left pl-4">
									<li>
										<img src="../img/commander/cross.png">
										<span> -right -top </span>
										<p class="text-danger font-italic"> after wall</p>
									</li>
									<li>
										<img src="../img/commander/heart.png">
										<span> -down </span>
										<p class="text-danger font-italic"> after laser </p>
									</li>
									<li>
										<img src="../img/commander/cross.png">
										<span> -left -top </span>
										<p class="text-danger font-italic"> group clear circle</p>
									</li>
								</ol>
								<ol class="col-5 text-left" start="4">
									<li>
										<img src="../img/commander/circle.png">
										<span> -left </span>
										<p class="text-danger font-italic"> after wall </p>
									</li>
									<li>
										<img src="../img/commander/cross.png">
										<span> -right -down </span>
										<p class="text-danger font-italic"> group clear arrow</p>
										<p class="text-danger font-italic"> after wall </p>
									</li>
									<li>
										<img src="../img/commander/arrow.png">
										<span> -top </span>
									</li>
								</ol>
								<div class="col-1"></div>
							</div>
						</div>
					</div>
				<!-- w4 -->
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w4b1" v-if="w4b1Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Cairn</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								xx							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w4b2" v-if="w4b2Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Mursaat Overseer</h5>
							<div class="row px-2">
								<iframe class="col-11 mx-auto" height="500px" src="https://www.youtube.com/embed/iHMzAPWoLDU"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">mechs</h5>
							<div class="row px-2 mx-2">
								<ul>
									<li class="row text-center pt-2">
										<a class="col-4" href="https://wiki.guildwars2.com/wiki/Claim">Claim</a>
										<a class="col-4" href="https://wiki.guildwars2.com/wiki/Dispel">Dispel</a>
										<a class="col-4" href="https://wiki.guildwars2.com/wiki/Protect">Protect</a>
									</li>
									<li class="row text-center pt-2">
										<img class="col-4" src="../img/raid/guide/mo_claim.png">
										<img class="col-4" src="../img/raid/guide/mo_dispel.png">		
										<img class="col-4" src="../img/raid/guide/mo_protect.png">
									</li>
									<li class="row text-center pt-2">
										<p class="col-4"> Turn orange tile safe (1 tile). </p>
										<p class="col-4"> Remove yellow shield of target add. </p>
										<p class="col-4"> Dome to make immune. (5s)(cd: 30s) </p>
									</li>
								</ul>							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w4b3" v-if="w4b3Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Samarog</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">|</h5>
							<div class="row px-2">
								<ul>
									<li> rigom -> push dudu </li>
									<li> fixated -> temporary tank </li>
									<li> tank </li>
								</ul>							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w4b4" v-if="w4b4Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Deimos</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								<ul>
									<li> blacks -> bk </li>
									<li> hands -> hk </li>
									<li> tank </li>
									<li> saul -> prides </li>
								</ul>							
							</div>
						</div>
					</div>	
				<!-- w5 -->
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w5b1" v-if="w5b1Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Soulless Horror</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">|</h5>
							<div class="row px-2">
								xx							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w5b2" v-if="w5b2Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">River of Souls</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">|</h5>
							<div class="row px-2">
								xx							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w5b3" v-if="w5b3Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Statues of Grenth</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								xx							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w5b4" v-if="w5b4Click > 0">
					<div class="col-6 border-right border-primary p-2">
						<h5 class="pb-2 border-bottom border-primary text-center">Dhuum</h5>
						<div class="row px-2">
							<img class="w-100 px-2 pb-2 roundedz" src="../img/raid/guide/dhuum_tank2.jpg">
						</div>
					</div>
					<div class="col-6 text-center p-2">
						<h5 class="pb-2 border-bottom border-primary text-center">Green Timing</h5>
						
						<div class="row pl-2">	
							<ul class="col-4 text-center pl-4 h5" style="list-style: none;line-height:35px">
									<h4> G1 </h4>
									<li>
										<img src="../img/commander/arrow.png">
										<span> 9:30 </span>
									</li>
									<li>
										<img src="../img/commander/square.png">
										<span> 8:00 </span>
									</li>
									<li>
										<img src="../img/commander/triangle.png">
										<span> 6:30 </span>
									</li>
									<li>
										<img src="../img/commander/heart.png">
										<span> 5:00 </span>
									</li>
									<li>
										<img src="../img/commander/swirl.png">
										<span> 3:30 </span>
									</li>
									<li>
										<img src="../img/commander/circle.png">
										<span> 2:00 </span>
									</li>
									<li>
										<img src="../img/commander/star.png">
										<span> 0:30 </span>
									</li>
							</ul>
							
							<ul class="col-4 text-center pl-4 h5" style="list-style: none;line-height:35px">
								<h4> G2 </h4>
								<li>
									<img src="../img/commander/circle.png">
									<span> 9:00 </span>
								</li>
								<li>
									<img src="../img/commander/star.png">
									<span> 7:30 </span>
								</li>
								<li>
									<img src="../img/commander/arrow.png">
									<span> 6:00 </span>
								</li>
								<li>
									<img src="../img/commander/square.png">
									<span> 4:30 </span>
								</li>
								<li>
									<img src="../img/commander/triangle.png">
									<span> 3:00 </span>
								</li>
								<li>
									<img src="../img/commander/heart.png">
									<span> 1:30 </span>
								</li>
								<li>
									<img src="../img/commander/swirl.png">
									<span> 0:00 </span>
								</li>
							</ul>
							
							<ul class="col-4 text-center pl-4 h5" style="list-style: none;line-height:35px">
								<h4> G3 </h4>
								<li>
									<img src="../img/commander/heart.png">
									<span> 8:30 </span>
								</li>
								<li>
									<img src="../img/commander/swirl.png">
									<span> 7:00 </span>
								</li>
								<li>
									<img src="../img/commander/circle.png">
									<span> 5:30 </span>
								</li>
								<li>
									<img src="../img/commander/star.png">
									<span> 4:00 </span>
								</li>
								<li>
									<img src="../img/commander/arrow.png">
									<span> 2:30 </span>
								</li>
								<li>
									<img src="../img/commander/square.png">
									<span> 1:00 </span>
								</li>
							</ul>
						</div>

						<h5 class="pb-2 border-bottom border-top border-primary  text-center pt-2 mt-2">Mechs</h5>
						<div class="row pl-2">
							<ul class="col-4 text-center pl-4" style="list-style: none;line-height:35px">
								<li>SAK</li>
								<li><img src="#"></li>
								<li><p>Run out group.</p></li>
							</ul>
							<ul class="col-4 text-center pl-4" style="list-style: none;line-height:35px">
								<li>Shackle</li>
								<li><img src="#"></li>
								<li><p>Run out group.</p></li>
							</ul>
							<ul class="col-4 text-center pl-4" style="list-style: none;line-height:35px">
								<li>Soul Split</li>
								<img src="#">
								<li><p>Return to soul. </p></li>
							</ul>
						</div>
						<!--
							<div class="row px-2 h-100">
								<iframe id="" src="https://www.youtube.com/embed/5gFxLKJI9ds" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no" frameborder="0" class="px-2 pb-2 roundedz col-11 mx-auto h-90"></iframe>						
							</div>
						-->
					</div>
					</div>
				<!-- w6 -->
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w6b1" v-if="w6b1Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Conjured Amalgamate</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								<ul>
									<li>swords</li>
									<li>shields</li>
								</ul>							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w6b2" v-if="w6b2Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Largos Assassins</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								xx							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w6b3" v-if="w6b3Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Qadim</h5>
							<div class="row px-2">
								<iframe class="col-11 mx-auto" height="500px" src="https://www.youtube.com/embed/nU_yQtk_8oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								xx							
							</div>
						</div>
					</div>
				<!-- w7 -->
					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w7b1" v-if="w7b1Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Gate</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								xx							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w7b2" v-if="w7b2Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Cardinal Sabir</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								xx							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w7b3" v-if="w7b3Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Cardinal Adina</h5>
							<div class="row px-2">
								xx
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
								xx							
							</div>
						</div>
					</div>

					<div class="col-12 row roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_w7b4" v-if="w7b4Click > 0">
						<div class="col-6 border-right border-primary p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">Qadim the Peerless</h5>
							<div class="row px-2">
								<iframe class="col-11 mx-auto" height="500px" src="https://www.youtube.com/embed/v1ZFeRot8zg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>	
							</div>
						</div>
						<div class="col-6 text-center p-2">
							<h5 class="pb-2 border-bottom border-primary text-center">xx</h5>
							<div class="row px-2">
									xx			
							</div>
						</div>
					</div>
				<!-- frac -->
					<div class="col-12 roundedz bg-darkz text-white px-0 border border-primary mainLeft lm_frac d-none">
						<div class="row p-2">
							<div id="container" class="col-6">
								<div id="outerdivz" class="roundedz d-block my-0">      
	    							<iframe id="innerdivz" src="https://wiki.guildwars2.com/wiki/Template:Daily_Recommended_Fractal_Schedule" scrolling="no" frameborder="0" class="border border-primary roundedz"></iframe>
								</div>
							</div>
							<div id="container" class="col-6">
								<div id="outerdiv" class="roundedz d-block my-0">      
	    							<iframe id="innerdiv" src="https://wiki.guildwars2.com/wiki/Template:Daily_Fractal_Schedule" scrolling="no" frameborder="0" class="border border-primary roundedz"></iframe>
								</div>
							</div>
						</div>
					</div>
				
			</div>
    <div class="row my-5 mx-auto">
		<div class="raidList col-11 mx-auto py-1">
		    <div class="row">
			<div class="col-6 row ">
				<div class="col-3 px-1">
				<div class="wing wing1 roundedz bg-darkz text-white px-0">
					<a href="https://metabattle.com/wiki/Guide:Raid_Wing_1_-_Spirit_Vale" target="_blank">
						<h5 class="text-center pt-3 pb-3 roundedz-top">WING 1</h5>
					</a>
					<div @click="w1b1Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing1boss1 px-0"><img class="d-none" src="../img/raid/vale_guardian.png"><p class="w-100 my-1 text-center px-0">VG</p></div>
					<div @click="w1b2Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing1boss2 px-0"><img class="d-none" src="../img/raid/spirit_woods.png"><p class="w-100 my-1 text-center px-0">Spirit</p></div>
					<div @click="w1b3Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing1boss3 px-0"><img class="d-none" src="../img/raid/gorseval.png"><p class="w-100 my-1 text-center px-0">Gorse</p></div>
					<div @click="w1b4Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing1boss4 px-0"><img class="d-none" src="../img/raid/sabetha.png"><p class="w-100 my-1 text-center px-0">Sab</p></div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 w1Movie wingMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none w1Menu">
   						<a href="https://www.youtube.com/watch?v=qtzMDCVHlLg" class="d-block" target="_blank"> VG: Guide </a>
   						<a href="https://www.youtube.com/watch?v=Ni_-HkRtmm4" class="d-block" target="_blank"> SW: Guide </a>
   						<a href="https://www.youtube.com/watch?v=B9qbuP9kv4Q" class="d-block" target="_blank"> Gorse: Tank </a>
   						<a href="https://www.youtube.com/watch?v=4bqwSrZ2Sr4" class="d-block" target="_blank"> Sab: Guide </a>
					</div>
				</p>
				</div>
				<div class="col-3 px-1">
				<div class="wing wing2 roundedz bg-darkz text-white px-0">
					<a href="https://metabattle.com/wiki/Guide:Raid_Wing_2_-_Salvation_Pass" target="_blank">
						<h5 class="text-center pt-3 pb-3 roundedz-top">WING 2</h5>
					</a>
					<div @click="w2b1Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing2boss1 px-0"><img class="d-none" src="../img/raid/sloth.png"><p class="w-100 my-1 text-center px-0">Sloth</p></div>
					<div @click="w2b2Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing2boss2 px-0"><img class="d-none" src="../img/raid/trio.png"> <p class="w-100 my-1 text-center px-0">Trio</p> </div>
					<div @click="w2b3Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing2boss3 px-0"><img class="d-none" src="../img/raid/matt2.png"> <p class="w-100 my-1 text-center px-0">Matt</p> </div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 w2Movie wingMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none w2Menu">
   						<a href="https://youtu.be/WIBTTAPd3ME" target="_blank" class="d-block"> Sloth: Guide </a>
   						<a href="https://youtu.be/ncVYseut8ag" target="_blank" class="d-block"> Trio: Guide </a>
   						<a href="https://youtu.be/q99ocDpSnAI" target="_blank" class="d-block"> Matt: Guide </a>
					</div>
				</p>
				</div>
				<div class="col-3 px-1">
				<div class="wing wing3 roundedz bg-darkz text-white px-0">
					<a href="https://metabattle.com/wiki/Guide:Raid_Wing_3_-_Stronghold_of_the_Faithful" target="_blank">
						<h5 class="text-center pt-3 pb-3 roundedz-top">WING 3</h5>
					</a>
					<div @click="w3b1Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing3boss1 px-0"><img class="d-none" src="../img/raid/glenna.png"><p class="w-100 my-1 text-center px-0">Escort</p></div>
					<div @click="w3b2Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing3boss2 px-0"><img class="d-none" src="../img/raid/kc.png"> <p class="w-100 my-1 text-center px-0">KC</p> </div>
					<div @click="w3b3Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing3boss3 px-0"><img class="d-none" src="../img/raid/castle.png"> <p class="w-100 my-1 text-center px-0">TC</p> </div>
					<div @click="w3b4Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing3boss4 px-0"><img class="d-none" src="../img/raid/xera.png"> <p class="w-100 my-1 text-center px-0">Xera</p> </div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 w3Movie wingMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none w3Menu">
   						
   						<a href="https://www.youtube.com/watch?v=6_3rNbxd9Ks" class="d-block" target="_blank"> Escort: Backwarg </a>
   						<a href="https://youtu.be/sqx8vuebQFM?t=11" class="d-block" target="_blank"> Escort: Tower </a>
   						<a href="https://www.youtube.com/watch?v=mRwLCQ7rUTw" class="d-block" target="_blank"> TC: Guide </a>
   						<a href="https://www.youtube.com/watch?v=BlSr3cg6Y9M&" class="d-block" target="_blank"> Xera: Tank </a>
   						<a href="https://drive.google.com/file/d/1Fy0d4hfUC89V1mECQ1g8GX27CahSoltG/view" class="d-block" target="_blank"> Xera: Doc </a>

					</div>
				</p>
				</div>
				<div class="col-3 px-1">
				<div class="wing wing4 roundedz bg-darkz text-white px-0">
					<a href="https://metabattle.com/wiki/Guide:Raid_Wing_4_-_Bastion_of_the_Penitent" target="_blank">
						<h5 class="text-center pt-3 pb-3 roundedz-top">WING 4</h5>
					</a>
					<div @click="w4b1Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing4boss1 px-0"><img class="d-none" src="../img/raid/cairn.png"><p class="w-100 my-1 text-center px-0">Cairn</p></div>
					<div @click="w4b2Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing4boss2 px-0"><img class="d-none" src="../img/raid/murs.png"> <p class="w-100 my-1 text-center px-0">Murs</p> </div>
					<div @click="w4b3Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing4boss3 px-0"><img class="d-none" src="../img/raid/sama.png"> <p class="w-100 my-1 text-center px-0">Sama</p> </div>
					<div @click="w4b4Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing4boss4 px-0"><img class="d-none" src="../img/raid/deimos.png"> <p class="w-100 my-1 text-center px-0">Deimos</p> </div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 w4Movie wingMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none w4Menu">
   						
   						<a href="https://www.youtube.com/watch?v=zPfLE1wwWkw" target="_blank" class="d-block"> Cairn: Guide </a>
   						<a href="https://youtu.be/iHMzAPWoLDU" target="_blank" class="d-block"> Mursaat: Guide </a>
   						<a href="https://youtu.be/pLudL0RBgf0" target="_blank" class="d-block"> Samarog: Guide </a>
   						<a href="https://www.youtube.com/watch?v=gW5HH36X3zU" target="_blank" class="d-block"> Deimos: Guide </a>
   						<a href="https://www.youtube.com/watch?v=53FETKJm07Y" target="_blank" class="d-block"> Deimos: HK </a>  
   						<a href="https://www.youtube.com/watch?v=wouXimrAqWM" target="_blank" class="d-block"> Deimos: BK </a>
   						<a href="https://www.youtube.com/watch?v=5b057YDS4t8" target="_blank" class="d-block"> Deimos: Tank </a>
					</div>
				</p>
				</div>
			</div>
			<div class="col-6 row ">
				<div class="col-3 px-1">
				<div class="wing wing5 roundedz bg-darkz text-white px-0">
					<a href="https://metabattle.com/wiki/Guide:Raid_Wing_5_-_Hall_of_Chains" target="_blank">
						<h5 class="text-center pt-3 pb-3 roundedz-top">WING 5</h5>
					</a>
					<div @click="w5b1Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing5boss1 px-0"><img class="d-none" src="../img/raid/horror.png"><p class="w-100 my-1 text-center px-0">Horror</p></div>
					<div @click="w5b2Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing5boss2 px-0"><img class="d-none" src="../img/raid/river.png"> <p class="w-100 my-1 text-center px-0">River</p> </div>
					<div @click="w5b3Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing5boss3 px-0"><img class="d-none" src="../img/raid/grenth.png"> <p class="w-100 my-1 text-center px-0">Grenth</p> </div>
					<div @click="w5b4Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing5boss4 px-0"><img class="d-none" src="../img/raid/dhuum.png"> <p class="w-100 my-1 text-center px-0">Dhuum</p> </div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 w5Movie wingMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none w5Menu">
   						
   						<a href="https://www.youtube.com/watch?v=cKUcf_ez9Ec" target="_blank" class="d-block"> Statues: Guide </a> 
   						<a href="https://www.youtube.com/watch?v=D_qq04tOGvY" target="_blank" class="d-block"> Dhuum: G(1,2,3) </a>
  						<a href="https://www.youtube.com/watch?v=1LEBSiNaJHs" target="_blank" class="d-block"> Dhuum: G1 </a>
   						<a href="https://www.youtube.com/watch?v=ahRBStY37Y8" target="_blank" class="d-block"> Dhuum: Kite & G2 </a>
   						<a href="https://www.youtube.com/watch?v=h33dD6pYqYg" target="_blank" class="d-block"> Dhuum: Tank & G3 </a>
   						<a href="https://www.youtube.com/watch?v=LW_KB_tjmdw" target="_blank" class="d-block"> Dhuum: Kiter </a>					
					</div>
				</p>
				</div>
				<div class="col-3 px-1">
				<div class="wing wing6 roundedz bg-darkz text-white px-0">
					<a href="https://metabattle.com/wiki/Guide:Raid_Wing_6_-_Mythwright_Gambit"  target="_blank">
						<h5 class="text-center pt-3 pb-3 roundedz-top">WING 6</h5>
					</a>
					<div @click="w6b1Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing6boss1 px-0"><img class="d-none" src="../img/raid/amal.png"><p class="w-100 my-1 text-center px-0">Amal</p></div>
					<div @click="w6b2Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing6boss2 px-0"><img class="d-none" src="../img/raid/largos.png"> <p class="w-100 my-1 text-center px-0">Largos</p> </div>
					<div @click="w6b3Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing6boss3 px-0"><img class="d-none" src="../img/raid/qadim.png"> <p class="w-100 my-1 text-center px-0">Qadim</p> </div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 w6Movie wingMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none w6Menu">
   						<a href="xxx" target="_blank" class="d-block"> Amal : Guide </a>
   						<a href="https://www.youtube.com/watch?v=RUQQhyE_YiA" target="_blank" class="d-block"> Largos : Guide </a>
   						<a href="https://www.youtube.com/watch?v=nU_yQtk_8oo" target="_blank" class="d-block"> Qadim : Guide </a>
					</div>
				</p>
				</div>
				<div class="col-3 px-1">
				<div class="wing wing7 roundedz bg-darkz text-white px-0">
					<a href="https://metabattle.com/wiki/Guide:Raid_Wing_7_-_The_Key_of_Ahdashim" target="_blank">
						<h5 class="text-center pt-3 pb-3 roundedz-top">WING 7</h5>
					</a>
					<div @click="w7b1Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing7boss1 px-0"><img class="d-none" src="../img/raid/gate.png"><p class="w-100 my-1 text-center px-0">Gate</p></div>
					<div @click="w7b2Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing7boss2 px-0"><img class="d-none" src="../img/raid/sabir.png"><p class="w-100 my-1 text-center px-0">Sabir</p></div>
					<div @click="w7b3Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing7boss3 px-0"><img class="d-none" src="../img/raid/adina.png"> <p class="w-100 my-1 text-center px-0">Adina</p> </div>
					<div @click="w7b4Click*=-1" class="row my-2 mx-3 border border-primary roundedz wing7boss4 px-0"><img class="d-none" src="../img/raid/peer.png"> <p class="w-100 my-1 text-center px-0">Qadim</p> </div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 w7Movie wingMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none w7Menu">
   						<a href="https://www.youtube.com/watch?v=Xx4vd3pFTGM" target="_blank" class="d-block"> Full Guide </a>
   						<a href="https://www.youtube.com/watch?v=jwjqrsBQhEo" target="_blank" class="d-block"> Sabir: Guide </a>
   						<a href="https://www.youtube.com/watch?v=T_RwWm0Jj4k" target="_blank" class="d-block"> Adina: Guide </a>
   						<a href="https://www.youtube.com/watch?v=v1ZFeRot8zg" target="_blank" class="d-block"> Qadim: Guide </a>

					</div>
				</p>
				</div>
				<!--
				<div class="col-1 " style="height:100%; padding-top:92px;padding-left:0px;padding-right:7px">
					<div class="border border-primary bg-warning p-1 ml-0" style="width:42px;max-width:42px;">
						<img width="32px" height="32px" class="icon_raid">
					</div>
				</div>
				-->
				<div class="col-3 px-1">
				<div class="wing fractal roundedz bg-darkz border border-primary text-white px-0">
					<a href="#"><h5 class="text-center pt-3 pb-3 roundedz-top"> FRACS </h5></a>
					<div class="row my-2 mx-3 border border-primary roundedz fracDaily px-0"><img class="d-none" src="../img/fractals/dailies.png"><p class="w-100 my-1 text-center px-0">Dailies</p></div>
					<div class="row my-2 mx-3 border border-primary roundedz fracRecs px-0"><img class="d-none" src="../img/fractals/recs.png"><p class="w-100 my-1 text-center px-0">Recs</p></div>
					<div class="row my-2 mx-3 border border-primary roundedz fracCMs px-0"><img class="d-none" src="../img/fractals/cms.png"> <p class="w-100 my-1 text-center px-0">CMs</p> </div>
					
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 w-50 text-center fracMovie wingMovie"></i><i class="fas fa-clock p-0 w-50 text-center fracDaily" ></i>
					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none fracMenuMovie">
   						<a href="https://www.youtube.com/watch?v=YvHN9KB0wbU" target="_blank"> merge(2,1,3) </a>
					</div>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none fracMenuDaily">
   						<a href="https://www.youtube.com/watch?v=YvHN9KB0wbU" target="_blank"> merge(2,1,3) </a>
					</div>
				</p>
				</div>
			</div>		
		    </div>
		</div>
	</div>
    <div class="row my-5 mx-auto">
		<div class="dungList col-11 mx-auto py-1">
		    <div class="row">
			<div class="col-6 row" >
				<div class="col-3 px-1">
				<div class="dung dung1 roundedz bg-darkz text-white px-0">
					<a href="https://wiki.guildwars2.com/wiki/Ascalonian_Catacombs_(explorable)"><h5 class="text-center pt-3 pb-3 roundedz-top dung_ac"> AC </h5></a>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung1story"><img class="d-none" src="../img/dung/ac0.png"><p class="w-100 my-1 text-center px-0"> Story </p></div> 
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung1path1"><img class="d-none" src="../img/dung/ac1.png"><p class="w-100 my-1 text-center px-0"> P1 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung1path2"><img class="d-none" src="../img/dung/ac2.png"><p class="w-100 my-1 text-center px-0"> P2 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung1path3"><img class="d-none" src="../img/dung/ac3.png"><p class="w-100 my-1 text-center px-0"> P3 </p></div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 acMovie dungMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none acMenu">
   						<a href="https://www.youtube.com/watch?v=YvHN9KB0wbU" target="_blank"> merge(2,1,3) </a>
					</div>
				</p>
				</div>
				<div class="col-3 px-1">
				<div class="dung dung2 roundedz bg-darkz text-white px-0">
					<a href="https://wiki.guildwars2.com/wiki/Caudecus%27s_Manor_(explorable)"><h5 class="text-center pt-3 pb-3 roundedz-top dung_cm"> CM </h5></a>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung2story"><img class="d-none" src="../img/dung/cm0.png"><p class="w-100 my-1 text-center px-0"> Story </p></div> 
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung2path1"><img class="d-none" src="../img/dung/cm1.png"><p class="w-100 my-1 text-center px-0"> P1 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung2path2"><img class="d-none" src="../img/dung/cm2.png"><p class="w-100 my-1 text-center px-0"> P2 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung2path3"><img class="d-none" src="../img/dung/cm3.png"><p class="w-100 my-1 text-center px-0"> P3 </p></div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 cmMovie dungMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none cmMenu">
   						<a href="#" target="_blank"> cm test </a>
					</div>
				</p>
				</div>
				<div class="col-3 px-1">
				<div class="dung dung3 roundedz bg-darkz text-white px-0">
					<a href="https://wiki.guildwars2.com/wiki/Twilight_Arbor_(explorable)"><h5 class="text-center pt-3 pb-3 roundedz-top dung_ta"> TA </h5></a>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung3story"><img class="d-none" src="../img/dung/ta0.png"><p class="w-100 my-1 text-center px-0"> Story </p></div> 
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung3path1"><img class="d-none" src="../img/dung/ta1.png"><p class="w-100 my-1 text-center px-0"> P1/FWD </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung3path2"><img class="d-none" src="../img/dung/ta2.png"><p class="w-100 my-1 text-center px-0"> P2/UP </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung3path3"><img class="d-none" src="../img/dung/ta3.png"><p class="w-100 my-1 text-center px-0"> AETHER </p></div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 taMovie dungMovie"></i>
					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none taMenu">
   						<a href="https://www.youtube.com/watch?v=YvHN9KB0wbU" target="_blank"> 3 </a>
					</div>   					
				</p>
				</div>
				<div class="col-3 px-1">
				<div class="dung dung4 roundedz bg-darkz text-white px-0">
					<a href="https://wiki.guildwars2.com/wiki/Sorrow%27s_Embrace_(explorable)"><h5 class="text-center pt-3 pb-3 roundedz-top dung_se"> SE </h5></a>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung4story"><img class="d-none" src="../img/dung/se0.png"><p class="w-100 my-1 text-center px-0"> Story </p></div> 
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung4path1"><img class="d-none" src="../img/dung/se1.png"><p class="w-100 my-1 text-center px-0"> P1 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung4path2"><img class="d-none" src="../img/dung/se2.png"><p class="w-100 my-1 text-center px-0"> P2 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung4path3"><img class="d-none" src="../img/dung/se3.png"><p class="w-100 my-1 text-center px-0"> P3 </p></div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 seMovie dungMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none seMenu">
   						<a href="https://www.youtube.com/watch?v=tz3uh9Ov7yU" target="_blank"> P3 - Skip </a>
					</div>
				</p>
				</div>
			</div>
			<div class="row col-6" >
				<div class="col-3 px-1">
				<div class="dung dung5 roundedz bg-darkz text-white px-0">
					<a href="https://wiki.guildwars2.com/wiki/Citadel_of_Flame_(explorable)"><h5 class="text-center pt-3 pb-3 roundedz-top dung_cof"> CoF </h5></a>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung5story"><img class="d-none" src="../img/dung/cof0.png"><p class="w-100 my-1 text-center px-0"> Story </p></div> 
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung5path1"><img class="d-none" src="../img/dung/cof1.png"><p class="w-100 my-1 text-center px-0"> P1 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung5path2"><img class="d-none" src="../img/dung/cof2.png"><p class="w-100 my-1 text-center px-0"> P2 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung5path3"><img class="d-none" src="../img/dung/cof3.png"><p class="w-100 my-1 text-center px-0"> P3 </p></div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 cofMovie dungMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none cofMenu">
   						<a href="https://www.youtube.com/watch?v=YvHN9KB0wbU" target="_blank"> 4 </a>
					</div>
				</p>
				</div>
				<div class="col-3 px-1">
				<div class="dung dung6 roundedz bg-darkz text-white px-0">
					<a href="https://wiki.guildwars2.com/wiki/Honor_of_the_Waves_(explorable)"><h5 class="text-center pt-3 pb-3 roundedz-top dung_hotw"> HotW </h5></a>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung6story"><img class="d-none" src="../img/dung/hotw0.png"><p class="w-100 my-1 text-center px-0"> Story </p></div> 
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung6path1"><img class="d-none" src="../img/dung/hotw1.png"><p class="w-100 my-1 text-center px-0"> P1 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung6path2"><img class="d-none" src="../img/dung/hotw2.png"><p class="w-100 my-1 text-center px-0"> P2 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung6path3"><img class="d-none" src="../img/dung/hotw3.png"><p class="w-100 my-1 text-center px-0"> P3 </p></div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 hotwMovie dungMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none hotwMenu">
   						<a href="https://www.youtube.com/watch?v=YvHN9KB0wbU" target="_blank"> 4 </a>
					</div>
				</p>
				</div>
				<div class="col-3 px-1">
				<div class="dung dung7 roundedz bg-darkz text-white px-0">
					<a href="https://wiki.guildwars2.com/wiki/Crucible_of_Eternity_(explorable)"><h5 class="text-center pt-3 pb-3 roundedz-top dung_coe"> CoE </h5></a>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung7story"><img class="d-none" src="../img/dung/coe0.png"><p class="w-100 my-1 text-center px-0"> Story </p></div> 
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung7path1"><img class="d-none" src="../img/dung/coe1.png"><p class="w-100 my-1 text-center px-0"> P1 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung7path2"><img class="d-none" src="../img/dung/coe2.png"><p class="w-100 my-1 text-center px-0"> P2 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung7path3"><img class="d-none" src="../img/dung/coe3.png"><p class="w-100 my-1 text-center px-0"> P3 </p></div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 coeMovie dungMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none coeMenu">
   						<a href="https://www.youtube.com/watch?v=YvHN9KB0wbU" target="_blank"> 4 </a>
					</div>
				</p>
				</div>
				<div class="col-3 px-1">
				<div class="dung dung8 roundedz bg-darkz text-white px-0">
					<a href="https://wiki.guildwars2.com/wiki/The_Ruined_City_of_Arah_(explorable)"><h5 class="text-center pt-3 pb-3 roundedz-top dung_arah"> ARAH </h5></a>
					<!--<div class="row my-2 mx-3 border border-primary roundedz px-0 dung8story"><img class="d-none" src="../img/dung/xx.png"><p class="w-100 my-1 text-center px-0"> Story </p></div> -->
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung8path1"><img class="d-none" src="../img/dung/arah1.png"><p class="w-100 my-1 text-center px-0"> P1 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung8path2"><img class="d-none" src="../img/dung/arah2.png"><p class="w-100 my-1 text-center px-0"> P2 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung8path3"><img class="d-none" src="../img/dung/arah3.png"><p class="w-100 my-1 text-center px-0"> P3 </p></div>
					<div class="row my-2 mx-3 border border-primary roundedz px-0 dung8path4"><img class="d-none" src="../img/dung/arah4.png"><p class="w-100 my-1 text-center px-0"> P4 </p></div>
					<div class="row pt-2"><img class="d-none" src="#"></div>
				</div>
				<p class="subMenu text-white w-75 mx-auto text-center mb-0">
					<i class="fas fa-film p-0 m-0 arahMovie dungMovie"></i>
   					<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none arahMenu">
   						<a href="https://www.youtube.com/watch?v=YvHN9KB0wbU" target="_blank"> 4 </a>
					</div>
				</p>
				</div>
			</div>
			<!--
			<div class="" style="height:100%;padding-top:92px">
				<div class="bg-warning border border-primary p-1 mx-auto">
					<img width="32px" height="32px" class="icon_dungeon">
				</div>
			</div>
			-->
		    </div>
		</div>
	</div>
</template>
<script>

export default {
    name: 'wingComponent',
    data(){
        return{
            hidden: 'true',
            w1b1Click: -1,
            w1b2Click: -1,
            w1b3Click: -1,
            w1b4Click: -1,
            w2b1Click: -1,
            w2b2Click: -1,
            w2b3Click: -1,
            w3b1Click: -1,
            w3b2Click: -1,
            w3b3Click: -1,
            w3b4Click: -1,
            w4b1Click: -1,
            w4b2Click: -1,
            w4b3Click: -1,
            w4b4Click: -1,
            w5b1Click: -1,
            w5b2Click: -1,
            w5b3Click: -1,
            w5b4Click: -1,
            w6b1Click: -1,
            w6b2Click: -1,
            w6b3Click: -1,
            w7b1Click: -1,
            w7b2Click: -1,
            w7b3Click: -1,
            w7b4Click: -1,
        }
    },
    props:{

    },
    computed:{
        
    }
}
</script>
<style scoped>
    .dung a h5,.wing a h5, .fracList > *,.fractals h5,.fractals,.kpWing{
		color: #FFFFFF;
		/*text-shadow: 1px 1px #007bff,-1px -1px #007bff;*/
		text-shadow: 1px 1px #343a40,-1px -1px #343a40;
		font-size: 15px;
		background-size: cover;
		background-repeat: no-repeat;
		font-family: 'Work Sans', sans-serif;
		font-weight: bold;
		letter-spacing: 1.5px;
		text-align: center;

	}

	.wing1 h5 , .kpW1{
		background: url(../img/raid/w1.png);
	}

	.wing2 h5 , .kpW2{
		background: url(../img/raid/w2.png);
	}

	.wing3 h5 , .kpW3{
		background: url(../img/raid/w3.png);
	}

	.wing4 h5 , .kpW4{
		background: url(../img/raid/w4.png);
	}

	.wing5 h5 , .kpW5{
		background: url(../img/raid/w5.png);
	}

	.wing6 h5 , .kpW6{
		background: url(../img/raid/w6.png);
	}

	.wing7 h5 , .kpW7{
		background: url(../img/raid/w7.png);
	}

	.wing .row{
		min-width: 66px;
	}

	.wing{
		min-width: 99px;

	}

    .fractal h5{
		background-image: url(../img/fractals/fractals.png);
	}

    .dung_ac{
		background: url(../img/dung/ac.png);
	}

	.dung_cm{
		background: url(../img/dung/cm.png);
	}

	.dung_ta{
		background: url(../img/dung/ta.png);
	}

	.dung_se{
		background: url(../img/dung/se.png);
	}

	.dung_cof{
		background: url(../img/dung/cof.png);
	}

	.dung_hotw{
		background: url(../img/dung/hotw.png);
	}

	.dung_coe{
		background: url(../img/dung/coe.png);
	}

	.dung_arah{
		background: url(../img/dung/arah.png);
	}
</style>