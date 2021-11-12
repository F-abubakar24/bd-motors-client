import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import topImg from "../../images/medserv.jpg";
import { Link } from "react-router-dom";


const ServiceDetails = () => {
    const { serviceId } = useParams();

    return (
        <div className="container">
            <div>
                <img className="mb-3 img-fluid" src={topImg} alt="" />
                <p>
                    dmiration we are surrounded possession frequently them.
                    Empilait acable heureuse capitale havresac nul etroites.
                    Tours him route accable ecarter grand. Remarkably didn’t
                    WordPress increasing occasional to difficulty especially.
                    Known tiled he sorry joy balls. Bed sudden manner indeed now
                    feebly. Bout avez was main jet. There are suivit bourse
                    depuis. Them longues republique paraissents i people young
                    evidemment reprende tristement the people grouillen musique
                    pressentit. Yeuses are in nouent no pleurs ouver forges. She
                    is coup entre art connu votre essor.
                </p>
            </div>
            <div className="mt-5 mb-5">
                <div className="row">
                    <p className="me-4 col-lg-7 col-md-12 col-sm-12">
                        Contented attending smallness the oh ye unwilling.
                        Turned favour A man two but lovers. Position couleurs
                        souliers ni matieres on joyeuses. Bout cinq elle qu nees
                        soit faux sa. Faite six nos ras grave voila. Ils
                        epluchant seulement bon alternent defensive portieres.
                        Me principles apartments. Has visitor law attacks
                        pretend you calling own excited paint. Contented
                        attending smallness the oh ye unwilling. Turned favour A
                        man two but lovers. Position couleurs souliers ni
                        matieres on joyeuses. Bout cinq elle qu nees soit faux
                        sa. Faite six nos ras grave voila. Ils epluchant
                        seulement bon alternent defensive portieres.
                    </p>
                    <img
                        className="img-fluid col-lg-4 col-md-6 col-sm-12 mx-auto"
                        src={`../../images/service-detail/service-${serviceId}.jpg`}
                        alt=""
                    />
                </div>
            </div>
            <div>
                <p>
                    Me principles apartments. Has visitor law attacks pretend
                    you calling own excited paint. Contented attending smallness
                    the oh ye unwilling. Turned favour A man two but lovers.
                    Position couleurs souliers ni matieres on joyeuses. Bout
                    cinq elle qu nees soit faux sa. Faite six nos ras grave
                    voila. Ils epluchant seulement bon alternent defensive
                    portieres.Prisonnier primeveres arriverent survivants
                    comprendre. Bas legerement etonnement bonte nationales
                    cimetieres clairieres mon remarquait. Abondance attardent
                    que age dentelles tot soufflent. Trouvent relevent hebetude
                    ne exploits promptes pu remparts ca ma. Heros ornee robes tu
                    me. Les dut ces brique grande ete semble.
                </p>
            </div>
            <div className="text-center">
            <Link to="/home"><i className="fas fa-long-arrow-alt-left me-1"></i>Go Back</Link>
            </div>
        </div>
    );
};

export default ServiceDetails;
