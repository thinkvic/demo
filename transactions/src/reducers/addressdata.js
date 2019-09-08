import { FETCH_SUCCESS } from "../actions/actions";


const init = {
    data:
    {
        "hash160": "be9b4c1d4bdbed55d2c02efd226e6690ec6a0cb8",
        "address": "1JNqRhJaQEBTU2dGRgmoEN1eiMo1N8sGEk",
        "n_tx": 1,
        "total_received": 14950000,
        "total_sent": 0,
        "final_balance": 14950000,
        "txs": [

            {
                "ver": 2,
                "inputs": [
                    {
                        "sequence": 4294967294,
                        "witness": "",
                        "prev_out": {
                            "spent": true,
                            "spending_outpoints": [
                                {
                                    "tx_index": 454491825,
                                    "n": 0
                                }
                            ],
                            "tx_index": 454156436,
                            "type": 0,
                            "addr": "1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s",
                            "value": 2000000000,
                            "n": 1,
                            "script": "76a914e8cea30989bd15530f819b766684b00dc7ba7cfa88ac"
                        },
                        "script": "483045022100eba61bd1dcf4c4a71d08323c570c5b553d54fe77e6195a5bc6e8877ae4a3d281022001169403964d233cd58c9f48d033d55c08e5dd03223f8f13b15a05abf05b197e012102679a681d9b5bf5c672e0413997762664a17009038674b806bf27dd6b368d9b67"
                    },
                    {
                        "sequence": 4294967294,
                        "witness": "",
                        "prev_out": {
                            "spent": true,
                            "spending_outpoints": [
                                {
                                    "tx_index": 454491825,
                                    "n": 1
                                }
                            ],
                            "tx_index": 454436874,
                            "type": 0,
                            "addr": "1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s",
                            "value": 1734858049,
                            "n": 1,
                            "script": "76a914e8cea30989bd15530f819b766684b00dc7ba7cfa88ac"
                        },
                        "script": "483045022100ad551e37038331afabf6a45d329a2978cc434020b3c985bec4e6f706fa8ae7020220794592445e2d4c181454603c37678e9b8da4aa0ac796f56648ef8d9b5664e8d2012102679a681d9b5bf5c672e0413997762664a17009038674b806bf27dd6b368d9b67"
                    },
                    {
                        "sequence": 4294967294,
                        "witness": "",
                        "prev_out": {
                            "spent": true,
                            "spending_outpoints": [
                                {
                                    "tx_index": 454491825,
                                    "n": 2
                                }
                            ],
                            "tx_index": 453854965,
                            "type": 0,
                            "addr": "1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s",
                            "value": 10000000000,
                            "n": 0,
                            "script": "76a914e8cea30989bd15530f819b766684b00dc7ba7cfa88ac"
                        },
                        "script": "4730440220243d800805959ae95aa337ae23fe934e1d480a2e337365a69e530965f907127f02202f868c5cea4179178aa882e023d2367522e99e50b583ae0691d86bc2ed196624012102679a681d9b5bf5c672e0413997762664a17009038674b806bf27dd6b368d9b67"
                    }
                ],
                "weight": 11892,
                "block_height": 578947,
                "relayed_by": "0.0.0.0",
                "out": [
                    {
                        "spent": false,
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1JNqRhJaQEBTU2dGRgmoEN1eiMo1N8sGEk",
                        "value": 14950000,
                        "n": 0,
                        "script": "76a914be9b4c1d4bdbed55d2c02efd226e6690ec6a0cb888ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454502547,
                                "n": 129
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1JR8YJ6htc8jk1txueYCoheavkAdpgb2Rt",
                        "value": 3713856,
                        "n": 1,
                        "script": "76a914bf0a6a4545787b102ab2752cf7f36edda36a71b488ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454493031,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "17iPbQtWo2iffnMWsPbQRg68DZiLg8ga32",
                        "value": 6950000,
                        "n": 2,
                        "script": "76a91449a4ab48cff393b3f1659e6f724e637f67bc554a88ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454498410,
                                "n": 2
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1MFRrd2ALCuFws7BsGXBpM7ZHh2UEkScPg",
                        "value": 942821,
                        "n": 3,
                        "script": "76a914de1d16662a25567552024cb18c333a8fa2d476e588ac"
                    },
                    {
                        "spent": false,
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3BMEXxuouzAcD7aXWXu5B7GDcKuQLUYVbw",
                        "value": 3248040,
                        "n": 4,
                        "script": "a91469f3772a62d3806e7dcdc68a37179d8ab66519fe87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 455330173,
                                "n": 196
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3EUdStzSEtQDFpcRYzBhcsLzbvxtboJSC7",
                        "value": 34950000,
                        "n": 5,
                        "script": "a9148c41e18dfce37487e9ccfefcf9c32d6b3fed6f7787"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454552697,
                                "n": 10
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3HNXguoXj7yfLUDHDoakTGLgiZKpBbEJtQ",
                        "value": 10000000,
                        "n": 6,
                        "script": "a914ac02f4af5637615d704a7010f3f4f9642061648887"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454667618,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3EjiHybMGJ65Ag9a86Mb91uKYFfvYF7r45",
                        "value": 1130950000,
                        "n": 7,
                        "script": "a9148f1c2a786c3d8c77ca96acd1ace5ac78aacdaebc87"
                    },
                    {
                        "spent": false,
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3AFgP7AVthAiAgymukoA2nFiC85AwHPEua",
                        "value": 214012,
                        "n": 8,
                        "script": "a9145dee6b8f945918c35a656d29e6f23a81ae138e0087"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 464146590,
                                "n": 4
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3MjQz5VmA8xqmeFR4baCfp6R9graLt85A8",
                        "value": 3989381,
                        "n": 9,
                        "script": "a914dbd699102fd265fdf7f4f6796247634bd3824f9987"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 459738454,
                                "n": 120
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3KSauH7N5TYWorZvXCdngSNsh3rtQnSfaJ",
                        "value": 1636823,
                        "n": 10,
                        "script": "a914c2b78db12fbca2b60fd30a9dbad207f943d32e3c87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454512386,
                                "n": 9
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "32ooujKEmu8GW7oazBpUpVQ4PZYCAKsmmR",
                        "value": 3000000,
                        "n": 11,
                        "script": "a9140c41023b19ff590ccda5c595634cac6aa787c13d87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454510434,
                                "n": 1
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "144imSUNpvFTke29CCLPopbpL55Hpm1Uy4",
                        "value": 2600000,
                        "n": 12,
                        "script": "76a914219c7d69fd8d04e56ff0bddf67fd162e6d7ccef988ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454521538,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3MgarR7Tgf1hTnAcCCY6DUTGCNyxDpjf7s",
                        "value": 200000,
                        "n": 13,
                        "script": "a914db4d965afe2573c98bf297d8ea0163195fa82d9c87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454795764,
                                "n": 1
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3BMEXxaceL9m4xrNhtQbB3yMEMYXBrwMmR",
                        "value": 5950000,
                        "n": 14,
                        "script": "a91469f377250114ae77289c85f63f3f8587e9977f1687"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454663186,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1K63ezLqxFy8DPxcBa6yHHimYq2pBtKCjz",
                        "value": 67573176,
                        "n": 15,
                        "script": "76a914c6668f67f50c69ee059c48976eedf11b88db639a88ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454733510,
                                "n": 53
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3CyQTCZwuedmCG5TZJXxXWaqQdFfgWCpGg",
                        "value": 950000,
                        "n": 16,
                        "script": "a9147bc2d84bb998b61c80a70e385872cc038090ba1487"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454491938,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "19HAx4GNAJWTmPeHrtSJenuZWy55etaNGh",
                        "value": 17192466,
                        "n": 17,
                        "script": "76a9145acff784e4073b45040036e2c7566886aeb8467a88ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454496775,
                                "n": 7
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "39CMUbj2mSsd8HCwDkDnAGYfKxN34TvhhL",
                        "value": 1650000,
                        "n": 18,
                        "script": "a914525543e01a8aaa8d878a3f1b7a32417c254b16ca87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454503422,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "15DjgntXXi25S9xGmt9tpjGb75oRAAKhCM",
                        "value": 18958217,
                        "n": 19,
                        "script": "76a9142e492090399184f8d910ef9f3b98640924908bbd88ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454521010,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3Fv8m1f1PCWCgDfktN8v14vTrwLf1Lh5Qe",
                        "value": 2545903,
                        "n": 20,
                        "script": "a9149c0cdfe5b70417a9908391d7725cfc940bb7532987"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454499737,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "338K86dukxNF761nn1zWyziELgDFRrcfvV",
                        "value": 6627015,
                        "n": 21,
                        "script": "a9140fc0e1cb33fd9d924c6c64cc452c0833d71d851287"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454519323,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1LExtr5c4TMxcpWrMz4eMUQp5dnFSpkdJN",
                        "value": 29950000,
                        "n": 22,
                        "script": "76a914d30e748cc5ef327758b9e144e1fb9c7cdbb1060688ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454499863,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "37ZiFNNm16qAgj1TWh5t3V5YiwXwYMA7HF",
                        "value": 23466147,
                        "n": 23,
                        "script": "a914406f1698fe3b660f96cf47bc720ccc137ff3449887"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 455698598,
                                "n": 12
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "32YbNLMNbH7p9FzwxQNgX4GhuW8jNgPv1T",
                        "value": 5716550,
                        "n": 24,
                        "script": "a91409604ce26d6e8da800ed4242b96f45c3fa97e04387"
                    },
                    {
                        "spent": false,
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3BMEXHkCvU4emHxPiKcRZjGKZf2M4Q5uZh",
                        "value": 850000,
                        "n": 25,
                        "script": "a91469f374ad75c1dee987a2a57c1117f31907c9d45d87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 457261875,
                                "n": 4
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3A3yVf71Hj1vwWANGCdjGARn1KmY3tvJPu",
                        "value": 699000,
                        "n": 26,
                        "script": "a9145bb7b6ba82c652bf695fe2a1a4fa49eb1733cad887"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454503223,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1Egmq9u5G3dfnm1soeF1vzrNFr4hRptc6k",
                        "value": 150000,
                        "n": 27,
                        "script": "76a914961f47b410cb29417cbaeb449351ef5136ad9abc88ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454499790,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "35q4NqsN94rtwBJ9whmVLuNspS9vWfMg2m",
                        "value": 19159950,
                        "n": 28,
                        "script": "a9142d65e0fceec92342fab30558e53e47f937f1663587"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454526040,
                                "n": 12
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1Fb4dxa5MxivoSM1YJ3qBxYa5JLJKVChHs",
                        "value": 502700,
                        "n": 29,
                        "script": "76a914a002f09ad7633c2e8f433d491c9dc4c4881304b388ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 460774625,
                                "n": 30
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "34N5U9wotVgNiesdbJEmuZmk8udJtDZ82V",
                        "value": 1700000,
                        "n": 30,
                        "script": "a9141d536eed96e8a61963a6b52c2e835ba7d335452587"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454535151,
                                "n": 2
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "32vZZ99PVYDruLaL9kgX5kMujvTATJHHGF",
                        "value": 2241999,
                        "n": 31,
                        "script": "a9140d87f00092d3608081268fdb164632363818d26887"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 456251619,
                                "n": 3
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3BMEXPwzv9vUu7RaB25KTEzX2FdPqgJqNM",
                        "value": 1000000,
                        "n": 32,
                        "script": "a91469f37512574902b45a7d89f320c28fe8a029c9c387"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454500513,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "375XcDz1rtdpP6Uxw9Jtk3eNW9zKbxHx71",
                        "value": 1004221753,
                        "n": 33,
                        "script": "a9143b1a8f253a480bb298c60e3fbfd0602996aa87ee87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454733510,
                                "n": 54
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "35SWHgKjABWYqfYuGEMJtJsZzg6Jh4TZ5v",
                        "value": 4264391,
                        "n": 34,
                        "script": "a9142921f0ece57e968212250d1a7d823ceacf35816f87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 455698598,
                                "n": 348
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3QPrAqGCEeFaiChGL9RR9epLhhc2cRmLZ8",
                        "value": 5716550,
                        "n": 35,
                        "script": "a914f90bae0438fa27c26372901ba0fc618763c8030287"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454580552,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1fwiTk7VhuJcUp7i9iLoTGZJ6WnVzZ79V",
                        "value": 400000,
                        "n": 36,
                        "script": "76a914075d7aee7f05e43fd2d49ab4aa8c761200a4014288ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454554342,
                                "n": 2
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3D2y8VFByep5yibtaxBWCe9dSwkypfFaEF",
                        "value": 454594,
                        "n": 37,
                        "script": "a9147c6f5ed835948bd0191d39eeaf845854c02fcaa187"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454494637,
                                "n": 1
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "387DfNtNVFHD2L8TzamDGEhfgLNRPMaZ6j",
                        "value": 10050000,
                        "n": 38,
                        "script": "a9144664895f6997d0f041fa4f50bf1d315ed929ee1f87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454499312,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3JSuqsBLtUP2L6phNAszcRjKy24WupDkDD",
                        "value": 8648389,
                        "n": 39,
                        "script": "a914b7cf3d2e3d8815dc68b58a75ec71107f93ef08d587"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454573545,
                                "n": 4
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3Gq9PmBwFjQiNVF3ud7RpMYcHwGX69ZoGc",
                        "value": 150000,
                        "n": 40,
                        "script": "a914a61373128eceda9b220c2639a428583783233c7787"
                    },
                    {
                        "spent": false,
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3EWAy7bUQ4Tt7UBPQP1ooK2LgioA3wHaSz",
                        "value": 9950000,
                        "n": 41,
                        "script": "a9148c8c9c03a1b53ad9d7e5ee342327700585af894a87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 455647118,
                                "n": 5
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "17ipeVmz25H2D4VR51hahuVNnMLQYVS9jV",
                        "value": 950000,
                        "n": 42,
                        "script": "76a91449b99519650cf1ad032c45f9da666ea2653e315488ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454547034,
                                "n": 1
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1FuFt4nTVQShMHcuwd1F26Leq63YzV9nPb",
                        "value": 224146,
                        "n": 43,
                        "script": "76a914a373d0031eecb00ba485680bbf7a813ce733917888ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 462844155,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3MyJSHFAhxxZfd8fqMR5FAMW9ssNSmGcs4",
                        "value": 49950000,
                        "n": 44,
                        "script": "a914de76f486a81c383f813b6b1325792de0631a968487"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454740840,
                                "n": 2
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1ukHsA9V6CAhj5xFAVddWoNF4QPT2VKQb",
                        "value": 600802637,
                        "n": 45,
                        "script": "76a91409f9c46fba0ea2d20e001ea81ec6a9fa027388d988ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454732177,
                                "n": 3
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "342YAauLQkCie4f1LZ85pkbEddVk53nYkv",
                        "value": 199900000,
                        "n": 46,
                        "script": "a91419a16650eb416261c629f172945c9a6e091f4e7f87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454497212,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3ENHR2BMXKY1W5PScuima5qhguBJVzdXQN",
                        "value": 2975091,
                        "n": 47,
                        "script": "a9148b0ea9c3a9565bef4bd0eab364b8995550221d3a87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 455700992,
                                "n": 3
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1BSZddYEJoH6cLqEKbETfikAjzs6FwKCSS",
                        "value": 9899950000,
                        "n": 48,
                        "script": "76a9147286e575dd801f43defb6fd84f9db18d86e6817e88ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 463503751,
                                "n": 6
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3Lwz3V2igNWMNKVvTZxDWdukFWPsbnXtE9",
                        "value": 2041385,
                        "n": 49,
                        "script": "a914d33f0f47e1c72427f2be10aab7ded01d33be6f3f87"
                    },
                    {
                        "spent": false,
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1LookEv6Kr1HJ3LEzSEefbrayMbMUXvNvy",
                        "value": 12000000,
                        "n": 50,
                        "script": "76a914d9448b9a75f0ef0c3e824c047796444738f993e288ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454679591,
                                "n": 8
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3BoQHWaSgEVvsZR4hBBJByqAEbZKfg7FVA",
                        "value": 1958155,
                        "n": 51,
                        "script": "a9146ee66b885064ba5bfd45d4c779b6028bb419df9287"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454502435,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1MNizL3kyd2ECKfJQFGp6A5DADttmjcSAR",
                        "value": 377250,
                        "n": 52,
                        "script": "76a914df7e4d1111817741f42df048000cfd1c1e459ce088ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 459801397,
                                "n": 2
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3MYvajTyeapeJDeSNmfKzWaccP2GxVefrq",
                        "value": 150000,
                        "n": 53,
                        "script": "a914d9dabaa425975eba47b545dda36ade003a3d2fe487"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 456880627,
                                "n": 2
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3BMEXjAsuDWnSiiG89QbBP76kLe2oWnaV2",
                        "value": 10963883,
                        "n": 54,
                        "script": "a91469f3764af0049a9d6ab70bde0bf0d7ce8c1a76df87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454527503,
                                "n": 1
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "336dGjJ2NuApFrfNZPwnh6YuTPmC1dpyuK",
                        "value": 17943440,
                        "n": 55,
                        "script": "a9140f6f3330b438b5d61ce64655af8fd1c1dbc3e2a487"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454529665,
                                "n": 177
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "35Scmr3UGt3CL982j9PZx8k3Ymk7YsxiJz",
                        "value": 350000,
                        "n": 56,
                        "script": "a91429275ae5476be7d677d36bcf4775edff950e3dd287"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454549503,
                                "n": 1
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1MgfRn8NHnc8ZE5kBvNgYbgpTFShJh5mKK",
                        "value": 7000000,
                        "n": 57,
                        "script": "76a914e2e2d0cb5b942e83aee1c1c47881b49acecb580a88ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454515703,
                                "n": 14
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1BsZoJs7Jr8r9TwGwra21KZJarpi2aSC54",
                        "value": 5880937,
                        "n": 58,
                        "script": "76a91477416f4628754319f493e1c43266f42ae6566f3788ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454498512,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3LG21q9LGY1gzTE5rNJ9cgH2S2YpAQoM8y",
                        "value": 2415900,
                        "n": 59,
                        "script": "a914cbb0112311af05324dbb8de1b60152c0c3db852787"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454524217,
                                "n": 1
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1M7VKk6sBnrF8Lf68iMDLvB2bqvJgMQeyH",
                        "value": 11519890,
                        "n": 60,
                        "script": "76a914dc9ca7888cdf6eb97b2bcc59d247c0e7e9e2796088ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454710178,
                                "n": 1
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "14Qmsjtd7FbKxMEvWkJjAAyqjBQgLYRwLm",
                        "value": 10000000,
                        "n": 61,
                        "script": "76a9142567677217c37b39a547a10dfa0cca538025076688ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454526432,
                                "n": 4
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3BVqv6seJVqqziS9g79nooVVhuxTnmFSXS",
                        "value": 690000,
                        "n": 62,
                        "script": "a9146b94540ce43f4284ece4a97286c620822083202387"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454492856,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1Nyyz1uErvKS891RaX67iFg8hAaK718cfm",
                        "value": 550000,
                        "n": 63,
                        "script": "76a914f121809a4d8754312b3d985cf56c8d33d234106888ac"
                    },
                    {
                        "spent": false,
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "38aTdcZmYFqU49vAUK8qRmogPjZCa1mGYs",
                        "value": 5339880,
                        "n": 64,
                        "script": "a9144b8b6dc5f0c460ec61f1b81e861365b05a01b8f387"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454966743,
                                "n": 7
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3HwVpn9rFZjSggrRRxN4bvszSGXDXwsjVg",
                        "value": 1350000,
                        "n": 65,
                        "script": "a914b23f2052dc607825c2ecde89fa87e01c3ab0d19387"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454498984,
                                "n": 3
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3GaVb8AaZnMnXPerVo2MNwJzRq4qZ3tEQw",
                        "value": 273950000,
                        "n": 66,
                        "script": "a914a34e1199f973cd1096c79e54dfcb664a0d4011ea87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454508831,
                                "n": 44
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3NUuSTrpDQmCLrYtk3GpEoZ4bQh6ztV7zP",
                        "value": 23557616,
                        "n": 67,
                        "script": "a914e4103cbb61859f7e12f1404490458e31d16498d387"
                    },
                    {
                        "spent": false,
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1H4T5d18NLk6EE9kUTrYamPvJauVUdrHv2",
                        "value": 871243,
                        "n": 68,
                        "script": "76a914b02907d7c4164491f9fcd30ec64605814f09612288ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454506476,
                                "n": 1
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "32YZnYA4uTHJ5iYe6QALJkT4V4xJr32GFh",
                        "value": 971247,
                        "n": 69,
                        "script": "a914095efaaa43e043fd2cca1a7433ffbeca7e51a11e87"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454503378,
                                "n": 99
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "16nK46faogtVB9wiun9aR1gW4ByxaZHzTT",
                        "value": 26167976,
                        "n": 70,
                        "script": "76a9143f6a6adc6844622f3f4b3cb3b8dcee893aafc95588ac"
                    },
                    {
                        "spent": false,
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1NCY64LPh4BzCJdsQir9EYM3Pn98DxUJ8a",
                        "value": 10099948,
                        "n": 71,
                        "script": "76a914e8892ad5d1abf18d9849004043b3c1b5bc82c74388ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454521908,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3LQErK4gZ6MT8B4zc63niuG7R99cHHJvub",
                        "value": 27499768,
                        "n": 72,
                        "script": "a914cd3e1c07c4d33bfcdde3b6eb5ae00e6962c1e71987"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454499339,
                                "n": 0
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "398sMv77rg2dodG6gcfCro2TsnJS8gweZz",
                        "value": 9132057,
                        "n": 73,
                        "script": "a91451ac8c3f88a84dccd0028746e289062ef85c95d287"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454526707,
                                "n": 84
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "19uMckyBnC3ApPEiMF5kFPsNGFfSVcw3WB",
                        "value": 46554000,
                        "n": 74,
                        "script": "76a91461a7d8991d6ace954336a47cded35281be55eab288ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 455979789,
                                "n": 2
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "1E6bkctfbtooyYufQtDQg1Xn4AUz1qTdBk",
                        "value": 979369,
                        "n": 75,
                        "script": "76a9148fa8b97bebe3315321bc2d56e88b1a35dd98ab4e88ac"
                    },
                    {
                        "spent": true,
                        "spending_outpoints": [
                            {
                                "tx_index": 454500466,
                                "n": 7
                            }
                        ],
                        "tx_index": 454491825,
                        "type": 0,
                        "addr": "3DiTj7G7RvK7xy6mJEoq7o2Ns3qCfKTQxk",
                        "value": 1141000,
                        "n": 76,
                        "script": "a91483e776e94befb3f03648a468d3640f6df5a9e38e87"
                    }
                ],
                "lock_time": 578946,
                "result": 0,
                "size": 2973,
                "block_index": 1766577,
                "time": 1559482347,
                "tx_index": 454491825,
                "vin_sz": 3,
                "hash": "7751f4d84365604fa2285fd1bc359799a641dad000c450dc52962bed27a7b31a",
                "vout_sz": 77
            }]
    }
}
export default (state = init, action) => {

    console.log('reducers...current action', action);

    switch (action.type) {
        case FETCH_SUCCESS:
            let s = { ...state, data: action.data };
            console.log('return new state', s);
            return s;
        default:
            return state
    }

}



